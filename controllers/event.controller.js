// event.controller.js

const Event = require("../models/event.model");

// Create Event
const createEvent = async (req, res) => {
  try {
    const { title, startTime, endTime, description } = req.body;
    const event = new Event({
      title,
      startTime,
      endTime,
      description,
      avatar: 'uploads/tennis.jpg' // Updated path separator
    });
    const savedEv = await event.save();
    res.status(201).json({ success: true, data: savedEv });
  } catch (error) {
    console.log("Creating Event", error);
    res.status(500).json({ success: false, error: "Error creating event" });
  }
};

// Get All Events
const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.status(200).json({ success: true, data: events });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error fetching events" });
  }
};

// Update Event
const updateEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const eventData = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(eventId, eventData, { new: true });
    if (!updatedEvent) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }
    res.status(200).json({ success: true, data: updatedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error updating event" });
  }
};

// Delete Event
const deleteEvent = async (req, res) => {
  try {
    const eventId = req.params.id;
    const deletedEvent = await Event.findByIdAndDelete(eventId);
    if (!deletedEvent) {
      return res.status(404).json({ success: false, error: "Event not found" });
    }
    res.status(200).json({ success: true, data: deletedEvent });
  } catch (error) {
    res.status(500).json({ success: false, error: "Error deleting event" });
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  updateEvent,
  deleteEvent
};