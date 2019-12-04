#!/usr/bin/env node

const package = require("./package.json");
const program = require("commander");
const chalk = require("chalk");
const fs = require("fs");
const readline = require("readline");
program.version(package.version);
program
  .name("rover-commander")
  .command("interactive")
  .alias("in")
  .description("Run the program in interactive mode")
  .action(function() {
    // await runInteractive();
  });

program
  .command("deploy <path>")
  .description("Deploy commands for rovers from a command file")
  .alias("d")
  .action(path => {
    console.log(chalk.bold.green.underline("Mars Rover\n"));
    console.log(chalk.green("Reading file:\n"));
    console.log(chalk.blue(`${path}\n`));
    if (!fs.existsSync(path)) {
      console.log(chalk.red("File not found!"));
      process.exit();
    }
    fs.readFile(path, { encoding: "UTF8" }, (error, data) => {
      console.log("Data is", data);
    });
  });

program.parse(process.argv);

// async function runInteractive() {
//   console.log(chalk.bold.green.underline("Mars Rover - Interactive Mode\n"));
//   const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     prompt: "ROVER> ",
//     completer: function completer(linePartial, callback) {
//       callback(null, [["123"], linePartial]);
//     }
//   });
//   const boundaryAnswer = rl.question(
//     chalk.yellow("Enter the map boundary\nExample 5,5\n")
//   );
//   console.log(boundaryAnswer);
//   // rl.question(chalk.yellow("C"))
// }
