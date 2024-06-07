// feedback.routes.js

const express = require('express');
const { createFeedback, getFeedbackList ,respondToFeedback, getFeedbackCount  } = require('../controllers/feedback.controller');

const router = express.Router();

router.post('/create', createFeedback);
router.get('/getfeedback', getFeedbackList);
router.post('/respond', respondToFeedback); // Add route for responding to feedback
router.get('/count', getFeedbackCount); // Add route to fetch feedback count



module.exports = router;