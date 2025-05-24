const Shift = require('../models/Shift');
const Incident = require('../models/incidents');

// Create a new shift
exports.createShift = async (req, res) => {
  try {
    const { assignedTo, incident } = req.body;
    const shift = new Shift({ assignedTo, incident });
    await shift.save();
    res.status(201).json(shift);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all shifts
exports.getAllShifts = async (req, res) => {
  try {
    const shifts = await Shift.find()
      .populate('assignedTo', 'name email')
      .populate('incident', 'title category description status latitude longitude photoUrl  ');
    res.json(shifts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update shift status (and incident status accordingly)
exports.updateShiftStatus = async (req, res) => {
  try {
    const { id } = req.params;        // shift id
    const { status } = req.body;      // new shift status: 'assigned', 'in_progress', 'resolved'

    if (!['assigned', 'in_progress', 'resolved'].includes(status)) {
      return res.status(400).json({ error: 'Invalid status value' });
    }

    // Update shift status
    const shift = await Shift.findByIdAndUpdate(id, { status }, { new: true });

    if (!shift) {
      return res.status(404).json({ error: 'Shift not found' });
    }

    // Sync incident status based on shift status
    let incidentStatusToUpdate;
    if (status === 'in_progress') {
      incidentStatusToUpdate = 'in_progress';
    } else if (status === 'resolved') {
      incidentStatusToUpdate = 'resolved';
      // Optionally set shift end time when resolved
      shift.endTime = new Date();
      await shift.save();
    } else {
      incidentStatusToUpdate = null;
    }

    if (incidentStatusToUpdate) {
      await Incident.findByIdAndUpdate(shift.incident, { status: incidentStatusToUpdate });
    }

    res.json(shift);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

