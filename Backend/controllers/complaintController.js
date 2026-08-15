const Complaint = require('../models/Complaint');

exports.registerComplaint = async (req, res) => {
  const { title, description, category } = req.body;
  try {
    const complaint = await Complaint.create({ student: req.user._id, title, description, category });
    res.status(201).json(complaint);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getComplaints = async (req, res) => {
  try {
    const complaints = await Complaint.find().populate('student', 'name roomNumber');
    res.json(complaints);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};