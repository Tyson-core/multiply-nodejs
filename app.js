const argv = require("./config/yargs").argv;
const colors = require('colors')

const { createFile, listTable } = require("./multiplier/multiplier");

let comando = argv._[0];

switch (comando) {
  case "list":
    listTable(argv.base, argv.limit);
    break;
  case "create":
    createFile(argv.base, argv.limit)
      .then((file) => console.log(`File created: ${file}`))
      .catch((e) => console.log(e));
    break;
  default:
    console.log("Command not found".red);
}

