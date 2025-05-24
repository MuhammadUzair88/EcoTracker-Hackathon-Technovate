const cloudinary = require("../config/cloudinary");
const Incident = require("../models/incidents");
const streamifier = require("streamifier");
const mongoose = require('mongoose');  


const uploadIncident = async (req, res) => {
  try {
    const {
      title,
      description,
      category,
      latitude,
      longitude,
      createdBy,
    } = req.body;

    if (!title || !description || !category || !latitude || !longitude) {
      return res.status(400).json({ error: "All fields are required" });
    }

    let photoUrl = "";

    const saveIncident = async () => {
  const newIncident = new Incident({
    title,
    description,
    category,
    latitude: parseFloat(latitude),
    longitude: parseFloat(longitude),
    photoUrl,
    createdBy: createdBy
  });
      await newIncident.save();

      res.status(201).json({
        success: true,
        message: "Incident reported successfully",
        incident: newIncident,
      });
    };

    if (req.file) {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          resource_type: "image",
          folder: "incidents",
          public_id: `${Date.now()}-${req.file.originalname}`,
        },
        async (error, result) => {
          if (error) {
            return res
              .status(500)
              .json({ error: "Cloudinary upload failed", details: error.message });
          }
          photoUrl = result.secure_url;
          await saveIncident();
        }
      );
      streamifier.createReadStream(req.file.buffer).pipe(uploadStream);
    } else {
      await saveIncident();
    }
  } catch (error) {
    console.error("Error uploading incident:", error.message);
    res.status(500).json({ success: false, message: "Server error", error: error.message });
  }
};

// Get all reports
const getAllReports = async (req, res) => {
  try {
    const reports = await Incident.find().populate('createdBy', 'username');;
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reports", error });
  }
};

// Get report by ID
const getReportById = async (req, res) => {
  try {
    const { id } = req.params;
    const report = await Incident.findById(id).populate('createdBy', 'username');

    if (!report) {
      return res.status(404).json({ message: "Report not found" });
    }

    res.status(200).json(report);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch report", error });
  }
};

// Controller to update incident status from 'new' to 'verified'
async function verifyIncidentStatus(req, res) {
  try {
    const { incidentId } = req.params;

    // Find the incident by ID
    const incident = await Incident.findById(incidentId);
    if (!incident) {
      return res.status(404).json({ message: 'Incident not found' });
    }

    // Check current status, only allow change if status is 'new'
    if (incident.status !== 'new') {
      return res.status(400).json({ message: 'Status can only be updated from "new"' });
    }

    // Update the status to 'verified'
    incident.status = 'verified';
    await incident.save();

    return res.status(200).json({ message: 'Incident status updated to verified', incident });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
}







module.exports = { uploadIncident , getAllReports,
  getReportById,verifyIncidentStatus };
