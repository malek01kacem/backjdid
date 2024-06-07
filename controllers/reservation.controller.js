const Reservation = require("../models/reservation.model");
const {
  reservationValidationSchema,
  updateReservationValidationSchema,
} = require("../dto/reservation.validations");

const createReservation = async (req, res, next) => {
  try {
    const { error, value } = reservationValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: error.details[0].message,
      });
    }

    // Set default status to "pending"
    value.status = "pending";

    const newReservation = new Reservation(value);
    await newReservation.save();
    res.status(201).json({
      statusCode: 201,
      success: true,
      message: "Reservation created successfully",
      data: newReservation,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getAllReservations = async (req, res, next) => {
  try {
    const reservations = await Reservation.find({}).populate('userId');
    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Reservations retrieved successfully",
      data: reservations,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};

const getReservationById = async (req, res, next) => {
  try {
    const reservation = await Reservation.findById(req.params.id).populate('userId');
    if (!reservation) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "Reservation not found",
      });
    }

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Reservation retrieved successfully",
      data: reservation,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};

const updateReservationById = async (req, res, next) => {
  try {
    const { error, value } = updateReservationValidationSchema.validate(req.body);
    if (error) {
      return res.status(400).json({
        statusCode: 400,
        success: false,
        message: error.details[0].message,
      });
    }

    const updatedReservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      value,
      { new: true }
    ).populate('userId');
    if (!updatedReservation) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "Reservation not found",
      });
    }

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Reservation updated successfully",
      data: updatedReservation,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};

const deleteReservationById = async (req, res, next) => {
  try {
    const deletedReservation = await Reservation.findByIdAndRemove(req.params.id);
    if (!deletedReservation) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "Reservation not found",
      });
    }

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Reservation deleted successfully",
      data: deletedReservation,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};
const getRespond = async (req, res, next) => {
  try {
    const userId = req.params.userId; // Assuming the parameter name is 'userId' in the URL
    const reservations = await Reservation.find({ userId }).populate('userId');
    if (!reservations || reservations.length === 0) {
      return res.status(404).json({
        statusCode: 404,
        success: false,
        message: "Reservations not found for the given user ID",
      });
    }

    res.status(200).json({
      statusCode: 200,
      success: true,
      message: "Reservations retrieved successfully",
      data: reservations,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: 500,
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = {
  createReservation,
  getAllReservations,
  getReservationById,
  updateReservationById,
  deleteReservationById,
  getRespond
};
