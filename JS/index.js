#!/usr/bin/env node

const package = require("./package.json");
const program = require("commander");
program.version(package.version);
program
  .name("rover-commander")
  .command("interactive")
  .alias("in")
  .description("Run the program in interactive mode")
  .action(function() {
    console.log("Interactive mode");
  });

program
  .command("deploy <path>")
  .description("Deploy commands for rovers from a command file")
  .alias("d")
  .action(path => {
    console.log("Path to file", path);
  });

program.parse(process.argv);
