const express = require("express");
const {
  createJob,
  getAllJobs,
  getJobById,
  updateJob,
  deleteJob,
} = require("../controller/controller");

const router = express.Router();

router.post("/addJob", createJob);

// Get all Job
router.get("/allJob", getAllJobs);

// Get a specific Job by ID
router.get("/:id", getJobById);

// Update a specific Job by ID
router.patch("/:id", updateJob);
router.delete("/:id", deleteJob);

module.exports = router;
