const express = require("express");
const Task = require("../models/task");
const router = express.Router();

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send(tasks);
  } catch (error) {
    res.status(500).send(error);
  }

  // Task.find({})
  //   .then((tasks) => {
  //     res.send(tasks);
  //   })
  //   .catch((e) => res.status(500).send("Unable to connect to database"));
});
router.get("/tasks/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const task = await Task.findById(id);
    res.send(task);
  } catch (error) {
    res.send(error);
  }
});
router.post("/tasks", async (req, res) => {
  try {
    const task = await new Task(req.body).save();
    res.status(201).send(task);
  } catch (error) {
    res.status(500).send(e);
  }
});

router.patch("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const validTasks = ["description", "completed"];
  const updates = Object.keys(req.body);
  // console.log(Object.keys(req.body));
  const isValid = updates.every((task) => {
    return validTasks.includes(task);
  });
  if (!isValid) {
    return res.status(400).send("Invalid arguments passed");
  }
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body);
    // console.log("REached here");
    if (!updatedTask) {
      return res.status(404).send("Task not found");
    }
    console.log();
    console.log("updated task" + updatedTask);
    return res.send(updatedTask);
  } catch (error) {
    res.status(400).send(error);
  }
});
router.delete("/tasks/:id", async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(404).send("Task not found");
    }
    res.send(task);
  } catch (error) {
    return res.status(400).send();
  }
});

module.exports = router;
