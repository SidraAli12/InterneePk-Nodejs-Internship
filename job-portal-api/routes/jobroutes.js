const express = require("express");
const router = express.Router();
const Job = require("../models/Job");

// Create Job
router.post("/", async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.json(job);
});

// Get All Jobs
router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

// Get Single Job
router.get("/:id", async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.json(job);
});

// Delete Job
router.delete("/:id", async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: "Job deleted" });
});

module.exports = router;