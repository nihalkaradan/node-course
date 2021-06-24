const fs = require("fs");
const chalk = require("chalk");

const getNotes = () => {
  return "your notes ...";
};

//ADD NOTE
const addNotes = (body, title) => {
  const notes = loadNote();
  const duplicateNotes = notes.filter((note) => {
    return note.title === title;
  });
  if (duplicateNotes.length === 0) {
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log("Note saved");
  } else {
    console.log("Duplicate exists!");
  }

  
};

// REMOVE note
const removeNote = (title) => {
  
  const notes = loadNote();
  const removedNotes = notes.filter((note) => {
    return note.title !== title;
  });
  const removedNotesJSON = JSON.stringify(removedNotes);
  if (removedNotesJSON === JSON.stringify(notes)) {
    console.log(chalk.red("No Notes found!"));
  } else {
    console.log(chalk.blue(`removed title : ${title}`));
    saveNote(removedNotes);
  }

  //fs.writeFileSync("notes.json", removedNotesJSON);
};

const saveNote = (notes) => {
  const dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};
const loadNote = () => {
  try {
    const dataJSON = fs.readFileSync("notes.json").toString();
    return JSON.parse(dataJSON);
  } catch (error) {
    return [];
  }
};
module.exports = {
  getNotes: getNotes,
  addNotes: addNotes,
  removeNote: removeNote,
};
