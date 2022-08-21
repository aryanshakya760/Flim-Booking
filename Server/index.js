const express = require("express");
const app = express();
// to directly parse the post request as JSON format
app.use(express.json());
const AdminBro = require("admin-bro");
const AdminBroExpress = require("admin-bro-expressjs");
const cors = require("cors");

const db = require("./models");

app.use(cors());

// Routers
const journeyRouter = require("./routes/Journey");
app.use("/journey", journeyRouter);

const catRouter = require("./routes/Categories");
app.use("/categories", catRouter);

const bookingRouter = require("./routes/Bookings");
app.use("/booking", bookingRouter);

const notificationRouter = require("./routes/Notification");
app.use("/notification", notificationRouter);

const movieRouter = require("./routes/Movie");
app.use("/movie", movieRouter);

const companyRouter = require("./routes/Company");
app.use("/company", companyRouter);

const showRouter = require("./routes/Show");
app.use("/show", showRouter);

const seatRouter = require("./routes/Seat");
app.use("/seat", seatRouter);

const userRouter = require("./routes/User");
app.use("/users", userRouter);

const AdminBroSequelize = require("@admin-bro/sequelize");
AdminBro.registerAdapter(AdminBroSequelize);
const adminBro = new AdminBro({
  rootPath: "/admin",
  loginPath: "/admin/login",
  databases: [db],
  branding: {
    companyName: "Movie Ticket",
    softwareBrothers: false,
  },
});
//static image
app.use("/public", express.static("./public"));
const router = AdminBroExpress.buildRouter(adminBro);

// const categoriesRouter = require("./routes/Categories")
// app.use("/categories", categoriesRouter)
app.use(adminBro.options.rootPath, router);
db.sequelize.sync().then(() => {
  app.listen(3001, () => {
    console.log("RUNNING");
  });
});
