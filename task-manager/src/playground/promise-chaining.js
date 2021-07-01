require("../db/mongoose");

const Task = require("../models/task");

// Task.findByIdAndDelete("60daf2a16032a0b4bde8526b")
//   .then((task) => {
//     console.log(task);
//     return Task.countDocuments();
//   })
//   .then((count) => {
//     return console.log(count);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const findAndDelete = async (id) => {
  const deletedTask = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments();
  return count;
};
findAndDelete("60dd8ee1654b76ce3fe08383").then((result) => {
  console.log(result);
});
