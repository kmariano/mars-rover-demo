#!/usr/bin/env node

const package = require("./package.json");
const program = require("commander");
const chalk = require("chalk");
const fs = require("fs");

program.version(package.version);
program
  .name("rover-commander")
  .command("interactive")
  .alias("in")
  .description("Run the program in interactive mode")
  .action(function() {
    console.log(chalk.bold.green.underline("Mars Rover - Interactive Mode\n"));
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
