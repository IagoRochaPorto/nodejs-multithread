const { syncFib } = require("./_fibonnaci");

// blocking
function main() {
  console.log("Antes");
  console.log(syncFib(42));
  console.log("Depois");
}

main();
