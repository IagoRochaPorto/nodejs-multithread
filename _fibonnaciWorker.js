const { syncFib } = require("./_fibonnaci");
const { parentPort, workerData } = require("node:worker_threads");

const result = syncFib(workerData.value);
if (parentPort) {
  parentPort.postMessage(result);
}
