import express from "express";
const router = express.Router();
import memberController from "./controls/member.conteroller";
import restaurantController from "./controls/restaurant.controller";
import makeUploader from "./libs/utils/uploader";
import productController from "./controls/product.controller";
import orderController from "./controls/order.controller";
/* MEMBER */
router.get("/member/restaurant", memberController.getRestaurant);
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout,
);
router.get(
  "/member/detail",
  memberController.verifyAuth,
  memberController.getMemberDetail,
);
router.post(
  "/member/update",
  memberController.verifyAuth,
  makeUploader("members").single("memberImage"),
  memberController.updateMember,
);
router.get("/member/top-users", memberController.getTopUsers);
/* PRODUCT */
router.get("/product/all", productController.getProducts);
router.get(
  "/product/:id",
  memberController.retrieveAuth,
  productController.getProduct,
);

/* ORDERS */
router.post(
  "/order/create",
  memberController.verifyAuth,
  orderController.createOrder,
);
router.get(
  "/order/all",
  memberController.verifyAuth,
  orderController.getMyOrders,
);
export default router;
