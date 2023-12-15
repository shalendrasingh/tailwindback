const mongoose = require("mongoose");
const jobSchema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    company: {
      type: String,
    },
    industry: {
      type: String,
    },
    location: {
      type: String,
    },
    remoteType: {
      type: String,
    },
    expMinimum: {
      type: String,
    },
    expMaximum: {
      type: String,
    },
    salaryMinimum: {
      type: String,
    },
    salaryMaximum: {
      type: String,
    },
    totalEmployee: {
      type: String,
    },
    quickApply: {
      type: String,
    },
    externalApply: {
      type: String,
    },
    applyType: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Job", jobSchema);
