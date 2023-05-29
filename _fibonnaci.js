function syncFib(n) {
  if (n < 2) return n;
  else return syncFib(n - 1) + syncFib(n - 2);
}

async function asyncFib(n) {
  return new Promise((resolve) => {
    setTimeout(() => {
      const result = syncFib(n);
      resolve(result);
    }, 100);
  });
}

module.exports = {
  syncFib,
  asyncFib,
};
