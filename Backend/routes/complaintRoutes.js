const express = require('express');
const { registerComplaint, getComplaints } = require('../controllers/complaintController');
const protect = require('../mddleware/authMiddleware');
const router = express.Router();

router.route('/').post(protect, registerComplaint).get(protect, getComplaints);

module.exports = router;