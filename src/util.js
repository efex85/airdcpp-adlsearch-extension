// Resolves with the result of the promise, or with `fallback` if it hasn't finished within `ms`.
// (The promise itself keeps running, its late result is ignored.)
export const withDeadline = (promise, ms, fallback) => {
  let timer;
  const deadline = new Promise((resolve) => {
    timer = setTimeout(() => resolve(fallback), ms);
  });

  return Promise.race([promise, deadline]).finally(() => clearTimeout(timer));
};
