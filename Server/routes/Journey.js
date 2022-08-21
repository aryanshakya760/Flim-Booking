const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();

const { Journey } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.route("/").get(async (req, res) => {
  showComments = await Journey.findAll();
  res.json(showComments);
});

router.route("/").post((req, res) => {
  // using sequelize to post data
  // accessing data
  // body has data in json
  const comment = req.body;
  Journey.create(comment);
  res.json(comment);
});

module.exports = router;
