#### ADL search for AirDC++w (https://airdcpp-web.github.io)
#### Requires: Python 3.7
#### > python adlsearch.py --help

import re
import xml.etree.ElementTree as et
import argparse
from timeit import default_timer as timer
from os import path
from glob import glob
from sys import argv
from itertools import groupby
from math import ceil

def main():
    start = timer()
    
    config = get_config()

    print("Loading profiles...", end = "", flush = True)
    profile = select_profile(config)
    print("OK!")
        
    print("Loading ADL...", end = "", flush = True)
    adl = get_adl_items(config)
    print("OK!")
    
    print("Loading share '{}'...".format(profile.Name), end = "", flush = True)
    caches = get_share_caches(config)
    share = get_share_items(profile, caches)
    print("OK!")
    
    print("Searching...".format(len(adl) * len(share)), end = "", flush = True)
    matches = perform_adl_search(adl, share)
    filtered = filter_matches(config, matches) if not config.NoIgnore else matches
    print("OK!")
    print("> ADL:          {} entries".format(len(adl)))
    print("> Share:        {} entries".format(len(share)))
    print("> Matched:      {} entries".format(len(matches)))
    print("> Ignored:      {} entries".format(len(matches) - len(filtered)))
    print("> Time spent:   {:.2f} seconds".format(timer() - start))

    if len(filtered) > 0:
        print("> Results:")
        print_matches(filtered)
        
# CLI / config

def get_config():
    args = get_cli_arguments()
    config_path = first(args.config) if args.config else find_config_path()
    
    if not config_path:
        print("Error!")
        throw_error("Configuration not found.")
    
    return object(Path = config_path,
                  Profile = first(args.profile),
                  NoIgnore = args.no_ignore)
    
def get_cli_arguments():
    parser = argparse.ArgumentParser(description="Perform an ADL search.")
    parser.add_argument("--config", nargs=1, default=None, help="Path to the AirDC++ config directory")
    parser.add_argument("--profile", nargs=1, default=None, help="The share profile to run the ADL against")
    parser.add_argument("--no-ignore", action='store_true', default=False, help="Do not hide results from ADLSearch.ignorelist")
    
    return parser.parse_args()
    
def find_config_path():
    return coalesce([find_config_in_bootfile(), find_config_from_default()])
    
def find_config_in_bootfile():
    if not path.isfile("dcppboot.xml"):
        return None
    
    element = et.parse("dcppboot.xml").getroot().find("./ConfigPath")
    
    return replace_bootfile_vars(element.text) if element != None else None

def replace_bootfile_vars(s):
    return s.replace("%[HOME]", path.expanduser("~/"))
    
def find_config_from_default():
    dirs = [".", path.expanduser("~/.airdc++"), "./config"]
    
    return first([d for d in dirs if path.isfile(path.join(d, "DCPlusPlus.xml"))])
    
# ADL result
def print_matches(matches):
    for key, group in groupby(matches, lambda x: x[0].Directory):
        print(key)
        print("\n".join([x[1].Path for x in group]))
        
    print("")
    
# ADL matching
def perform_adl_search(adl, share):
    return [(ai, si) for ai in adl for si in share if is_adl_match(ai, si)]
    
def is_adl_match(adl_item, share_item):
    return is_source_match(adl_item, share_item) and is_regex_match(adl_item, share_item) and is_size_match(adl_item, share_item)
    
def is_source_match(adl_item, share_item):
    if adl_item.SourceType == "Filename" and share_item.Type == "File":
        return True
    elif share_item.Type == "Directory" and adl_item.SourceType == "Directory":
        return True
    elif adl_item.SourceType == "Full Path":
        return True
    else:
        return False
        
def is_regex_match(adl_item, share_item):
    text = share_item.Path if adl_item.SourceType == "Full Path" else share_item.Name
    
    return adl_item.Regex.search(text) != None
    
def is_size_match(adl_item, share_item):
    if share_item.Type == "Directory":
        return True
        
    min_size, max_size = adl_item.MinSize, adl_item.MaxSize
    file_size = getsize_proxy(share_item.Path)
    
    return file_size > -1 and (min_size == -1 or file_size >= min_size) and (max_size == -1 or file_size <= max_size)
    
def getsize_proxy(full_path):
    if not path.isfile(full_path):
        return -1

    return path.getsize(full_path)
        
# Ignore list
def filter_matches(config, matches):
    file_path = path.join(config.Path, "ADLSearch.ignorelist")
    
    if not path.isfile(file_path):
        return matches

    with open(file_path) as f:
        list = f.read().splitlines()

    return [(ai, si) for (ai, si) in matches if not any([si.Path == ln for ln in list])]

# ADL search items
def get_adl_items(config):
    xml = get_xml_config(config, "ADLSearch.xml")
    parsed = [parse_adl_item(e) for e in xml.findall("./SearchGroup/Search")]
    
    return [it for it in parsed if it != None]
    
def parse_adl_item(e):
    search = e.find("./SearchString").text
    dest = e.find("./DestDirectory").text
    is_regex = e.find("./SearchString").attrib["RegEx"]
    source_type = e.find("./SourceType").text
    is_active = e.find("./IsActive").text
    size_type = e.find("./SizeType").text
    min_size = e.find("./MinSize").text
    max_size = e.find("./MaxSize").text
    
    def get_byte_size(size_text, size_type):
        value = int(size_text)
        
        if value < 0:
            return -1;
        elif size_type.lower() == "mib":
            return value * 1024 * 1024
        elif size_type.lower() == "kib":
            return value * 1024
        elif size_type.lower() == "gib":
            return value * 1024 * 1024 * 1024
        else:
            return value
    
    if is_regex == "1" and is_active == "1":
        return object(SourceType = source_type,
                      Regex = re.compile(unboost_regex(search), flags = re.IGNORECASE),
                      Directory = dest,
                      MinSize = get_byte_size(min_size, size_type),
                      MaxSize = get_byte_size(max_size, size_type))
        
    return None
    
# Profiles
def get_share_profiles(config):
    xml = get_xml_config(config, "DCPlusPlus.xml")
    elements = [e for e in xml.findall("./*[@Name]") if e.tag in ["Share", "ShareProfile"]]
    
    return [it for it in [parse_share_profile(e) for e in elements] if it != None]
    
def parse_share_profile(e):
    return object(Name = e.attrib["Name"],
                  Paths = [e.text for e in e.findall("./Directory")])
                  
def select_profile(config):
    profiles = get_share_profiles(config)
    
    if len(profiles) == 0:
        throw_error("No share profiles found.")
    elif len(profiles) == 1:
        return profiles[0]
    elif not config.Profile:
        print("Error!")
        print("Multiple profiles found: {}".format(", ".join([p.Name for p in profiles])))
        print("Select the right one with --profile PROFILE")
        exit(-1)
    else:
        matches = [p for p in profiles if p.Name.lower() == config.Profile.lower()]
        
        if not matches:
            throw_error("Profile '{}' not found.".format(config.Profile))
            
        return matches[0]

# Share
def get_share_caches(config):
    xmlglob = path.join(config.Path, "ShareCache", "*.xml")
    
    return [get_share_cache(xml) for xml in glob(xmlglob)]
    
def get_share_cache(cache_path):
    xml = et.parse(cache_path).getroot()
    
    return object(Path = xml.attrib["Path"],
                  Xml = xml)

def get_share_items(profile, caches):
    my_caches = [c for c in caches if any([c.Path == p for p in profile.Paths])]
    
    return [it for c in my_caches for it in expand_share_items(c)]
                  
def expand_share_items(cache):
    items = []
    
    def expand(e, current_dir):
        for e2 in [e2 for e2 in e.findall("./*[@Name]") if e2.tag in ["File", "Directory"]]:
            item = parse_share_item(e2, current_dir)
            items.append(item)
            
            if item.Type == "Directory":
                expand(e2, item.Path)
                
    expand(cache.Xml, cache.Path)
    
    return items
    
def parse_share_item(e, current_dir):
    item_name = e.attrib["Name"]
    
    return object(Type = e.tag,
                  Name = item_name,
                  Directory = current_dir,
                  Path = path.join(current_dir, item_name))

# Tools
def get_xml_config(config, filename):
    full_path = path.join(config.Path, filename)
    
    if not path.isfile(full_path):
        print("Error!")
        throw_error("Config file '{}' not found".format(full_path))
    
    return et.parse(full_path)

def object(**kwargs):
    return type("Object", (), kwargs)
    
def coalesce(list):
    return first([it for it in list if it])
    
def first(list):
    return (list or [None])[0]
    
def throw_error(message):
    print(message)
    exit(-1)
    
def unboost_regex(pattern):
    py_regex = pattern.replace("(?-i)", "").replace("(?i)", "")
    
    if py_regex.startswith("(?i:"):
        py_regex = "(?:" + py_regex[4:]
    
    return py_regex

if __name__ == '__main__':
    main()