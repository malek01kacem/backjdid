const Feedback = require('../models/feedback.model');
const { createFeedbackValidation } = require('../dto/feedback.validation');


// Controller function to handle feedback creation
const createFeedback = async (req, res) => {
    try {
        const { fullName, email, feedback } = req.body;
        
        // Create new feedback instance
        const newFeedback = new Feedback({
            fullName,
            email,
            feedback
        });

        // Save feedback to the database
        await newFeedback.save();

        res.status(201).json({ message: 'Feedback created successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Controller function to retrieve list of feedback
const getFeedbackList = async (req, res) => {
    try {
        // Fetch all feedback from the database
        const feedbackList = await Feedback.find({}, 'fullName email feedback');

        res.status(200).json(feedbackList);
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};

const respondToFeedback = async (req, res) => {
    try {
        const { feedbackId, response } = req.body;
        
        // Find the feedback by its ID and update it with the response
        await Feedback.findByIdAndUpdate(feedbackId, { response });

        res.status(200).json({ message: 'Response sent successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


const getFeedbackCount = async (req, res) => {
    try {
        // Fetch count of feedbacks from the database
        const feedbackCount = await Feedback.countDocuments();

        res.status(200).json({ feedbackCount });
    } catch (error) {
        res.status(500).json({ message: 'Internal server error' });
    }
};


module.exports = {
    createFeedback,
    getFeedbackList,
    respondToFeedback,
    getFeedbackCount
};