const mongoose = require('mongoose');

const shiftSchema = new mongoose.Schema({
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Staff',
    required: true
  },
  incident: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Incident',
    required: true
  },
  status: {
    type: String,
    enum: ['assigned', 'in_progress', 'resolved'],
    default: 'assigned'
  },
  startTime: {
    type: Date,
    default: Date.now
  },
  endTime: Date
}, { timestamps: true });

module.exports = mongoose.model('Shift', shiftSchema);
