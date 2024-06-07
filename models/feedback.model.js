// feedback.model.js

const mongoose = require('mongoose');

// Feedback schema  
const feedbackSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    feedback: {
        type: String,
        required: true
    }
});

// Feedback model
const Feedback = mongoose.model('Feedback', feedbackSchema);

module.exports = Feedback;