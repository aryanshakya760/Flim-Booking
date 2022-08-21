const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();

const { validateToken } = require("../middleware/AuthMiddleware");
const { Seat } = require("../models");
const { Booking } = require("../models");

router.route("/").get(async (req, res) => {
  const seats = await Seat.findAll();
  res.json(seats);
});

router.route("/").post((req, res) => {
  // using sequelize to post data
  // accessing data
  // body has data in json
  const message = req.body;
  console.log(message);
  const seats = Seat.create(message);
  res.json(seats);
});

module.exports = router;
