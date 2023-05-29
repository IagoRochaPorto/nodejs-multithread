const { asyncFib } = require("./_fibonnaci");

// blocking
async function main() {
  console.log("Antes");
  console.log(await asyncFib(42));
  console.log("Depois");
}

main();
