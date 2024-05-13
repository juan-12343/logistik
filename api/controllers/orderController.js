const { Order } = require("../models");
const { generateTrackingNumber } = require("../utils/trackingNumber");

class OrderController {
  static async createOrder(req, res) {
    const { companyName, customerName, email, address, items } = req.body;

    try {
      const newOrder = await Order.create({
        companyName,
        customerName,
        email,
        address,
        items,
        trackingNumber: generateTrackingNumber(),
      });

      res.json({ message: "Order created successfully", order: newOrder });
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async updateOrderById(req, res) {
    const orderId = req.params.id;
    const { companyName, customerName, address, items } = req.body;

    try {
      const updatedOrder = await Order.findByIdAndUpdate(
        orderId,
        {
          companyName,
          customerName,
          address,
          items,
        },
        { new: true }
      );

      if (!updatedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.json({ message: "Order updated successfully", Order: updatedOrder });
    } catch (error) {
      console.error("Error updating order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async deleteOrderById(req, res) {
    const orderId = req.params.id;

    try {
      const deletedOrder = await Order.findByIdAndDelete(orderId);

      if (!deletedOrder) {
        return res.status(404).json({ message: "Order not found" });
      }

      res.json({ message: "Order deleted successfully", order: deletedOrder });
    } catch (error) {
      console.error("Error deleting order:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  }

  static async getAllOrders(req, res) {
    try {
      const orders = await Order.findAll();

      if (!orders) {
        return res.status(404).json({ message: "No orders found" });
      }

      res.json({ orders });
    } catch (error) {
      console.error("Error fetching orders:", error);
      res.status(500).json({ message: error.message });
    }
  }
}
module.exports = OrderController;
