const { asyncFib } = require("./_fibonnaci");

// non-blocking
async function main() {
  console.log("Antes");
  asyncFib(42).then(console.log);
  console.log("Depois");
}

main();
