const { Worker } = require("node:worker_threads");

// non-blocking
async function main() {
  console.log("before");
  const worker = new Worker("./_fibonnaciWorker.js", {
    workerData: { value: 42 },
  });

  worker.on("message", (result) => console.log("result", result));

  worker.on("error", (err) => console.log("error", err));

  console.log("after");
}

main();
