import express from "express";
const router = express.Router();
import memberController from "./controls/member.conteroller";
import restaurantController from "./controls/restaurant.controller";
/* MEMBER */
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.post(
  "/member/logout",
  memberController.verifyAuth,
  memberController.logout,
);
router.get("/member/detail", memberController.verifyAuth);
/* PRODUCT */

/* ORDERS */
export default router;
