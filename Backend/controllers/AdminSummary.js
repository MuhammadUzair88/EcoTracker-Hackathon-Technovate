const Incident = require('../models/incidents');
const Staff = require('../models/staff');
const Shift = require('../models/Shift');
const User = require('../models/User');

exports.getAdminDashboardSummary = async (req, res) => {
  try {
    // Total incidents by status
    const incidentCounts = await Incident.aggregate([
      {
        $group: {
          _id: '$status',
          count: { $sum: 1 }
        }
      }
    ]);

    // Map incident counts to an object like { new: 5, verified: 10, ... }
    const incidentsByStatus = incidentCounts.reduce((acc, curr) => {
      acc[curr._id] = curr.count;
      return acc;
    }, {});

    // Total staff
    const totalStaff = await Staff.countDocuments();

    // Total users
    const totalUsers = await User.countDocuments();

    // Active shifts (status assigned or in_progress)
    const activeShifts = await Shift.countDocuments({ status: { $in: ['assigned', 'in_progress'] } });

    // Recent incidents - latest 5
    const recentIncidents = await Incident.find({})
      .sort({ createdAt: -1 })
      .limit(5)
      .select('title status createdAt')
      .lean();

    res.json({
      success: true,
      data: {
        incidentsByStatus,
        totalStaff,
        totalUsers,
        activeShifts,
        recentIncidents,
      },
    });
  } catch (error) {
    console.error('Dashboard summary error:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
