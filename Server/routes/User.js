const express = require("express");
const { sequelize } = require("../models");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");
// generate token using sign
const { sign } = require("jsonwebtoken");
const { validateToken } = require("../middleware/AuthMiddleware");

router.get("/", async (req, res) => {
  showUser = await User.findAll();
  res.json(showUser);
});

router.route("/login_user").post(async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ where: { username: username } });
  if (!user) {
    res.json({ error: "User not found" });
    return;
  }

  if (password != user.password) {
    res.json({ error: "No correct password" });
    return;
  }

  // json web token is going to hash the username and id
  // third parameter is secret word to protect token
  const accessToken = sign(
    {
      username: user.username,
      id: user.id,
      isVerified: user.isVerified,
      email: user.email,
      password: user.password,
    },
    "important"
  );

  // after getting this accessToken it is stored in sessionStorage and use as part of header when request is made
  res.json(accessToken);
});

router.route("/").post(async (req, res) => {
  // using sequelize to post data
  // accessing data
  // body has data in json
  const { username } = req.body;
  console.log(username);
  const user_test = await User.findOne({ where: { username: username } });
  if (user_test) res.json({ error: "User already found" });
  const user = req.body;

  User.create(user);
  res.json(user);
});

// async and await waiting for the data to be inserting and doing other things
router.route("/update").post(validateToken, async (req, res) => {
  // using sequelize to post data
  // accessing data
  // body has data in json
  const { username, password } = req.body;
  const updateUser = req.body;
  // const hash = user.password
  // User.create({
  //     username: user.username,
  //     password: hash
  // })
  // res.json(hash);
  const userId = req.user.id;
  const updated = User.update(updateUser, { where: { id: userId } });
  res.json(userId);
});

router.route("/auth").get(validateToken, (req, res) => {
  // using sequelize to post data
  // accessing data
  // body has data in json
  const userId = req.user;
  console.log(userId);
  res.json(userId);
});

module.exports = router;
