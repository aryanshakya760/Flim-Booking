const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();

const { Company } = require("../models");
const { validateToken } = require("../middleware/AuthMiddleware");

router.route("/:id").get(async(req, res) => {
    const id = req.params.id;
    showCompany = await Company.findOne({ where: { id: id } });
    res.json(showCompany);
});

router.route("/").post(async(req, res) => {
    // using sequelize to post data
    // accessing data
    // body has data in json
    const company = req.body;
    await Company.create(company);
    res.json(company);
});

module.exports = router;