const Room = require('../models/Room');

exports.getRooms = async (req, res) => {
  try {
    const rooms = await Room.find().populate('students', 'name');
    res.json(rooms);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.createRoom = async (req, res) => {
  const { roomNumber, floor, capacity } = req.body;
  try {
    const room = await Room.create({ roomNumber, floor, capacity });
    res.status(201).json(room);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};