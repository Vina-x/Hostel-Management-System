const mongoose = require('mongoose');

const complaintSchema = mongoose.Schema(
  {
    student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true, enum: ['Plumbing', 'Electrical', 'Food', 'Other'] },
    status: { type: String, enum: ['Pending', 'Resolved'], default: 'Pending' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Complaint', complaintSchema);