require("dotenv").config();
const Job = require("../models/model");

const createJob = async (req, res) => {
  try {
    const {
      title,
      company,
      industry,
      location,
      remoteType,
      expMinimum,
      expMaximum,
      salaryMinimum,
      salaryMaximum,
      totalEmployee,
      quickApply,
      externalApply,
    } = req.body;

    let job = new Job({
      title,
      company,
      industry,
      location,
      remoteType,
      expMinimum,
      expMaximum,
      salaryMinimum,
      salaryMaximum,
      totalEmployee,
      quickApply,
      externalApply,
    });
    await job.save();
    res.status(201).json({ message: "Job Added Successfully", job: job });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const job = await Job.find({}).sort({ createdAt: -1 });
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getJobById = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    res.json(job);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(req.params.id, req.body);
    if (!job) {
      return res.status(404).json({ error: "Job not found" });
    }
    const result = await Job.findById(req.params.id);

    res.status(200).json(result);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ error: "Data not found" });
    }
    res.json({ message: "Job deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createJob,
  updateJob,
  getJobById,
  getAllJobs,
  deleteJob,
};
