const loginRoute = require("express").Router();
const loginController = require("../controllers/loginController");

loginRoute.post("/", loginController.login);
loginRoute.get("/", loginController.getadmin);
loginRoute.post("/create", loginController.create);
loginRoute.put("/:id", loginController.update);
loginRoute.delete("/:id", loginController.delete);
loginRoute.get("/:id", loginController.getadminbyid);

module.exports = loginRoute;
