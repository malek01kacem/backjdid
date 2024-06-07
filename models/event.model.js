const { Schema, model } = require("mongoose");
const { type } = require("../dto/event.validations");

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  startTime: {
    type: String,
    required: true
  },
  endTime: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'uploads/tennis.jpg' // Default avatar
  }
}, {
  versionKey: false,
  timestamps: true
});

const EventModel = model("Event", eventSchema);

module.exports = EventModel;