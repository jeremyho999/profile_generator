//const readline = require('node:readline');          //you don't need "node:"! like the following line:
const readline = require('readline');

//const {stdin: input, stdout: output} = require("node:process");       //you don't need "node:"! like the following line:
//const {stdin: input, stdout: output} = require("process");

//const rl = readline.createInterface({ input, output });

//you can use the following block to replace Line 5 & 7:
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What do you think of Node.js? ", (answer) => {
  console.log(`Thank you for your valuable feedback: ${answer}`);

  rl.close();
});