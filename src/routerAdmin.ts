import express from "express";
const routerAdmin = express.Router();

import restaurantController from "./controls/restaurant.controller";
import productController from "./controls/product.controller";
import makeUploader from "./libs/utils/uploader";
/**Restaurant */
routerAdmin.get("/", restaurantController.goHome);

routerAdmin
  .get("/login", restaurantController.getLogin)
  .post("/login", restaurantController.processLogin);
routerAdmin
  .get("/signup", restaurantController.getSignup)
  .post(
    "/signup",
    makeUploader("members").single("memberImage"),
    restaurantController.processSignup,
  );
routerAdmin.get("/check-me", restaurantController.checkAuthSession);
routerAdmin.get("/logout", restaurantController.logout);
/** Produsc */
routerAdmin.get(
  "/product/all",
  restaurantController.verifyRestaurant,
  productController.getAllProducts,
);
routerAdmin.post(
  "/product/create",
  restaurantController.verifyRestaurant,
  makeUploader("products").array("productImage", 5),
  productController.createNewProduct,
);
routerAdmin.post(
  "/product/:id",
  restaurantController.verifyRestaurant,
  productController.updateChosenproduct,
);
/** User */

routerAdmin
  .get(
    "/user/all",
    restaurantController.verifyRestaurant,
    restaurantController.getUsers,
  )
  .post(
    "/user/edit",
    restaurantController.verifyRestaurant,
    restaurantController.updateChosenusers,
  );
export default routerAdmin;
