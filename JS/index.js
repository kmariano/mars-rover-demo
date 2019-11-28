const package = require("./package.json");
const program = require("commander");
const program = new commander.Command();
program.version(package.version);

program
  .option("-i, --interactive", "Run in interactive mode")
  .option("-f, --file-path", "Path to rover command file")
  .parse(process.argv);
