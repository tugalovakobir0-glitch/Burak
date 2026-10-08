import express from "express";
const routerAdmin = express.Router();

import restaurantController from "./controls/restaurant.controller";
import productController from "./controls/product.controller";
/**Restaurant */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post("/signup", restaurantController.processSignup);
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
routerAdmin.get("/log-out", restaurantController.logout);
/** Produsc */
routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts,
);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  productController.createNewProduct,
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenproduct,
);
/** User */
export default routerAdmin;
