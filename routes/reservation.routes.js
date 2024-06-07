const express = require("express");
const router = express.Router();
const reservationController = require("../controllers/reservation.controller");

router.post("/create", reservationController.createReservation);
router.get("/getall", reservationController.getAllReservations);
router.get("/getbyid/:id", reservationController.getReservationById);
router.put("/update/:id", reservationController.updateReservationById);
router.delete("/delete/:id", reservationController.deleteReservationById);
router.get("/getrespond/:userId", reservationController.getRespond);

module.exports = router;