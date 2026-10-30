import express from "express";
const router = express.Router();
import memberController from "./controls/member.conteroller";
/* MEMBER */
router.post("/member/signup", memberController.signup);
router.post("/member/login", memberController.login);
router.get("/member/detail", memberController.verifyAuth);
/* PRODUCT */

/* ORDERS */
export default router;
