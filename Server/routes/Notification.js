const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();

const { validateToken } = require("../middleware/AuthMiddleware");
const { Notification } = require("../models");

router.route("/").get(async(req, res) => {
    const showNotification = await Notification.findAll();
    res.json(showNotification);
});

router.route("/").post((req, res) => {
    // using sequelize to post data
    // accessing data
    // body has data in json
    const message = req.body.event;
    const noti = Notification.create({ message: message });
    res.json(noti);
});

module.exports = router;