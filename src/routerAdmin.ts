import express from "express";
const routerAdmin = express.Router();
import memberController from "./controls/restaurant.controller";
import restaurantController from "./controls/restaurant.controller";

routerAdmin.get("/", restaurantController.goHome);

routerAdmin.get("/login", restaurantController.getLogin);
routerAdmin.get("/signup", restaurantController.getSignup);

export default routerAdmin;
