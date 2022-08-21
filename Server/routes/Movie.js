const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { Movie } = require("../models");

const User = require("../models/User");

const multer = require("multer");
const path = require("path");
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./public");
    },
    filename: (req, file, cb) => {
        console.log(file);
        cb(null, Date.now() + path.extname(file.originalname));
    },
});

const upload = multer({
    storage: storage,
    limits: { fileSize: "1000000000" },
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/;
        const minType = fileTypes.test(file.mimetype);
        const extname = fileTypes.test(path.extname(file.originalname));
        if (minType && extname) {
            return cb(null, true);
        }
        cb("Give proper format for image");
    },
}).single("image");

router.get("/", async(req, res) => {
    showAllProduct = await Movie.findAll();
    console.log(showAllProduct);
    res.json(showAllProduct);
});

router.get("/latest", async(req, res) => {
    showLatestBlog = await Movie.findAll({
        limit: 10,
        order: [
            ["updatedAt", "DESC"]
        ],
    });
    res.json(showLatestBlog);
});

// async and await waiting for the data to be inserting and doing other things
router.route("/").post(upload, (req, res) => {
    // using sequelize to post data
    // accessing data
    // body has data in json
    console.log("Here");
    const { name, description, price, CategoryId } = req.body;
    Movie.create({
        name: name,
        description: description,
        price: price,
        CategoryId: CategoryId,
        image: req.file.path,
    });
    res.json("Movie Added successfully!");
});

router.get("/:id", async(req, res) => {
    const id = req.params.id;
    getIdRelatedBlog = await Movie.findByPk(id);
    res.json(getIdRelatedBlog);
});

router.delete("delete/:id", async(req, res) => {
    const blogId = req.params.id;
    deleteBlog = await Movie.destroy({ where: { id: blogId } });
    res.json("Post deleted.");
});

router.get("/search", async(req, res) => {
    const id = req.params.id;
    getIdRelatedBlog = await Movie.find((title = "I am binod"));
    res.json(getIdRelatedBlog);
});

module.exports = router;