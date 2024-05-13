const orderRoute = require("express").Router();
const orderController = require("../controllers/orderController");

orderRoute.post("/order", orderController.createOrder);

orderRoute.get("/order", orderController.getAllOrders);

orderRoute.put("/order/:id", orderController.updateOrderById);

orderRoute.delete("/order/:id", orderController.deleteOrderById);

module.exports = orderRoute;
