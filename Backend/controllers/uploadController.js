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

module.exports = { uploadIncident };
