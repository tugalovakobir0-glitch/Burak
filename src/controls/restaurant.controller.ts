import express, { NextFunction, Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/MemberService";
import { AdminRequest, LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import Errors, { HttpCode, Message } from "../libs/Errors";

const memberService = new MemberService();
const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Home Page");
    res.render("home");
  } catch (err) {
    console.log("Error Home Page:", err);
    res.redirect("/admin");
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("Login Page");
    res.render("login");
  } catch (err) {
    console.log("Error Login Page:", err);
    res.redirect("/admin");
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("Signup Page");
    res.render("signup");
  } catch (err) {
    console.log("Error Signup Page:", err);
    res.redirect("/admin");
  }
};
restaurantController.processSignup = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("PostprocessSignup");
    const file = req.file;
    if (!file)
      throw new Errors(HttpCode.BAD_REQUEST, Message.SOMETHING_WENT_WRONG);

    const newMember: MemberInput = req.body;
    newMember.memberImage = file?.path.replace(/\\/g, "/");
    newMember.memberType = MemberType.RESTAURANT;

    const result = await memberService.processSignup(newMember);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error PostprocessSignup:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('admin/signup')</script>`,
    );
  }
};

restaurantController.processLogin = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("Postprocess");
    console.log("body:", req.body);
    const input: LoginInput = req.body,
      result = await memberService.processLogin(input);

    req.session.member = result;
    req.session.save(function () {
      res.redirect("/admin/product/all");
    });
  } catch (err) {
    console.log("Error Postprocess:", err);
    const message =
      err instanceof Errors ? err.message : Message.SOMETHING_WENT_WRONG;
    res.send(
      `<script>alert("${message}"); window.location.replace('admin/login')</script>`,
    );
  }
};
restaurantController.checkAuthSession = async (
  req: AdminRequest,
  res: Response,
) => {
  try {
    console.log("checkAuthSession");
    console.log("body:", req.body);
    if (req.session?.member)
      res.send(`<script>alert(${req.session.member.memberNick})</script>`);
    else res.send(`<script>alert(${Message.NOT_AUTHENTICATED})</script>`);
  } catch (err) {
    console.log("Error Postprocess:", err);
    res.send(err);
  }
};
restaurantController.logout = async (req: AdminRequest, res: Response) => {
  try {
    req.session.destroy(function () {
      res.redirect("/admin");
    });
  } catch (err) {
    console.log("Error Postprocess:", err);
    res.send(err);
  }
};
restaurantController.verifyRestaurant = (
  req: AdminRequest,
  res: Response,
  next: NextFunction,
) => {
  if (req.session?.member?.memberType === MemberType.RESTAURANT) {
    req.member = req.session.member;
    next();
  } else {
    const message = Message.NOT_AUTHENTICATED;
    res.send(
      `<script>alert("${message}"); window.location.replace('admin/login')</script>`,
    );
  }
};

export default restaurantController;
