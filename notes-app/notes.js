const fs = require("fs");
const getNotes = () => {
  return "your notes ...";
};
const addNotes = (body, title) => {
  const notes = loadNote();
  const duplicateNotes = notes.filter( note => {return note.title === title});
  if (duplicateNotes.length === 0){
    notes.push({
      title: title,
      body: body,
    });
    saveNote(notes);
    console.log("Note saved")
  }else{
    console.log("Duplicate exists!")
  }
  
  // console.log(notes)
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
};
