import { ManagedExtension } from 'airdcpp-extension';
import Entry from './main.js';

// Entry point that is executed by the application.
// See https://github.com/airdcpp-web/airdcpp-extension-js for usage information

// The share validation hooks are fired for every file during share refreshes. Keep them out of the
// (debug) console output, rejected items are still logged (see the apisocket documentation).
ManagedExtension(Entry, {
  ignoredListenerEvents: [ 'share_file_validation_hook', 'new_share_directory_validation_hook' ],
  ignoredRequestPaths: /^(sessions\/activity|share\/hooks\/(share_file_validation_hook|new_share_directory_validation_hook)\/\d+\/resolve)$/,
});

// An error in a callback must not stop the whole extension (the share would then not be checked at all)
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled error:', reason && reason.stack ? reason.stack : reason);
});
