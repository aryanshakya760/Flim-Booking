const express = require("express");
const { validateToken } = require("../middleware/AuthMiddleware");
const { sequelize } = require("../models");
const router = express.Router();
const { Booking } = require("../models");
const { Movie } = require("../models");
const Show = require("../models/Show");

router.get("/", async (req, res) => {
  showEvents = await Booking.findAll();
  res.json(showEvents);
});

router.get("/myBookings", validateToken, async (req, res) => {
  const { id } = req.user;
  showBooking = await Booking.findAll({ where: { UserId: id } });
  res.json(showBooking);
});
router.route("/").post(async (req, res) => {
  // using sequelize to post data
  // accessing data
  // body has data in json
  const message = req.body;
  console.log(message);

  const checkBooking = await Booking.findOne({
    where: { MovieId: message.MovieId, UserId: message.UserId },
  });

  const checkBookingSeatShowMovie = await Booking.findOne({
    where: {
      MovieId: message.MovieId,
      SeatId: message.SeatId,
      ShowId: message.ShowId,
    },
  });

  if (!checkBooking) {
    if (!checkBookingSeatShowMovie) {
      const seats = Booking.create(message);
      res.json(seats);
    } else {
      res.json(
        `Movie Ticket Booked with ${checkBookingSeatShowMovie.movieName}, try choosing another seat or show or movie!`
      );
    }
  } else {
    res.json("Seat booked already");
  }
});
module.exports = router;
