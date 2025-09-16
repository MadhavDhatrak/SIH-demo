// controllers/hazardReportController.js
import Incident from "../models/Incident.js";
import path from "path";

// Create a new report
export const createReport = async (req, res) => {
  try {
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    
    const hazardType = req.body.hazardType;
    const severity = req.body.severity;
    const description = req.body.description;
    const locationDescription = req.body.locationDescription;
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;
    const timeOfObservation = req.body.timeOfObservation;
    
    console.log({
      hazardType,
      severity,
      description,
      locationDescription,
      latitude,
      longitude,
      timeOfObservation
    });

    // Validate required fields with more detailed error messages
    const missingFields = [];
    if (!hazardType) missingFields.push("hazardType");
    if (!severity) missingFields.push("severity");
    if (!description) missingFields.push("description");
    if (!locationDescription) missingFields.push("locationDescription");
    if (!latitude) missingFields.push("latitude");
    if (!longitude) missingFields.push("longitude");
    if (!timeOfObservation) missingFields.push("timeOfObservation");

    if (missingFields.length > 0) {
      return res.status(400).json({ 
        success: false, 
        message: "All required fields must be provided",
        missingFields: missingFields
      });
    }

    // Determine media type from file if present
    let mediaType = null;
    if (req.file) {
      if (req.file.mimetype.startsWith('image/')) {
        mediaType = 'image';
      } else if (req.file.mimetype.startsWith('video/')) {
        mediaType = 'video';
      }
    }

    const report = new Incident({
      hazardType,
      severity,
      description,
      locationDescription,
      latitude,
      longitude,
      timeOfObservation,
      mediaUrl: req.file ? `/uploads/incidents/${path.basename(req.file.path)}` : null,
      mediaType
    });

    await report.save();
    res.status(201).json({ success: true, data: report });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// Get all reports
export const getReports = async (req, res) => {
  try {
    const reports = await Incident.find().sort({ createdAt: -1 });
    res.json({ success: true, data: reports });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
