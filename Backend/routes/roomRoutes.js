const express = require('express');
const { getRooms, createRoom } = require('../controllers/roomController');
const protect = require('../mddleware/authMiddleware');
const router = express.Router();

router.route('/').get(getRooms).post(protect, createRoom);

module.exports = router;