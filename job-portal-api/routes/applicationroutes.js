const express = require("express");
const router = express.Router();
const Application = require("../models/Application");

// Apply for Job
router.post("/", async (req, res) => {
  const application = new Application(req.body);
  await application.save();
  res.json(application);
});

// Get All Applications
router.get("/", async (req, res) => {
  const apps = await Application.find().populate("jobId");
  res.json(apps);
});

module.exports = router;