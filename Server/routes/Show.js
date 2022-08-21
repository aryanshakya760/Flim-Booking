const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();

const { validateToken } = require("../middleware/AuthMiddleware");
const { Show } = require("../models");

router.route("/").get(async(req, res) => {
    const shows = await Show.findAll();
    res.json(shows);
});

router.route("/").post((req, res) => {
    // using sequelize to post data
    // accessing data
    // body has data in json
    const message = req.body;
    const shows = Show.create(message);
    res.json(shows);
});

module.exports = router;