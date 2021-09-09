const chalk = require("chalk");
const { demandOption } = require("yargs");
const yargs = require("yargs");
const notes = require("./notes.js");

//customize yargs version
yargs.version("1.1.0");

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note.",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a note.",
  builder: {
    title: {
      describe: "Note title to be removed",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

//Create list command
yargs.command({
  command: "list",
  describe: "listing notes",

  handler() {
    notes.listNotes();
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Reading notes",
  builder: {
    title: {
      describe: "Note to be read",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

yargs.parse();
