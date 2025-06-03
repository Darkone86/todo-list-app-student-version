const express = require("express");
const router = express.Router();
const taskModel = require("../models/taskModel");

//Write a comment describing the purpose of this route
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// the purpose of this route is to give people the date to the list.
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  const { name, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
