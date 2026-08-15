const mongoose = require('mongoose');

const roomSchema = mongoose.Schema(
  {
    roomNumber: { type: String, required: true, unique: true },
    floor: { type: Number, required: true },
    capacity: { type: Number, required: true, default: 3 },
    students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    status: { type: String, enum: ['Available', 'Full'], default: 'Available' }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Room', roomSchema);