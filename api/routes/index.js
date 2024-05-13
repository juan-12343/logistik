const route = require("express").Router();

route.get("/", (req, res) => {
  res.status(200).json({
    message: "home routes",
  });
});

const loginRoutes = require("./login");
const orderRoutes = require("./order");

route.use("/api/login", loginRoutes);
route.use("/api/order", orderRoutes);

module.exports = route;
