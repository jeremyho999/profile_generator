const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Want a funny and quirky online profile? Please answer some questions:\n");
  
rl.question("What's your name? Nicknames are also acceptable:) ", (answer1) => {
  rl.question("What's an activity you like doing? ", (answer2) => {
    rl.question("What do you listen to while doing that? ", (answer3) => {
      rl.question("Which meal is your favorite (eg: dinner, brunch, etc.) ", (answer4) => {
        rl.question("What's your favorite thing to eat for that meal? ", (answer5) => {
          rl.question("Which sport is your absolute favorite? ", (answer6) => {
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer7) => {

              console.log("\nHere's your profile:\n")
              console.log(`${answer1} loves listening to ${answer3} while ${answer2}, devouring ${answer5} for ${answer4}, prefers ${answer6} over any other sport, and is amazing at ${answer7}.`);
              rl.close();
              
            });
          });
        });
      });
    });
  });
});