import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/MemberService";
import { LoginInput, MemberInput } from "../libs/types/member";
import { MemberType } from "../libs/enums/member.enum";
import { log } from "console";

const restaurantController: T = {};

restaurantController.goHome = (req: Request, res: Response) => {
  try {
    console.log("Home Page");
    res.send("Home Page");
  } catch (err) {
    console.log("Error Home Page:", err);
  }
};
restaurantController.getLogin = (req: Request, res: Response) => {
  try {
    console.log("Login Page");
    res.send("Login Page");
  } catch (err) {
    console.log("Error Login Page:", err);
  }
};
restaurantController.getSignup = (req: Request, res: Response) => {
  try {
    console.log("Signup Page");
    res.send("Signup Page");
  } catch (err) {
    console.log("Error Signup Page:", err);
  }
};
restaurantController.processLogin = async (req: Request, res: Response) => {
  try {
    console.log("Postprocess");
    console.log("body:", req.body);
    const input: LoginInput = req.body;
    const memberService = new MemberService();
    const result = await memberService.processLogin(input);
    res.send(result);
  } catch (err) {
    console.log("Error Postprocess:", err);
  }
};
restaurantController.processSignup = async (req: Request, res: Response) => {
  try {
    console.log("PostprocessSignup");
    console.log("body:", req.body);

    const newMember: MemberInput = req.body;
    newMember.memberType = MemberType.RESTAURANT;

    const memberService = new MemberService();
    const result = await memberService.processSignup(newMember);

    res.send(result);
  } catch (err) {
    console.log("Error PostprocessSignup:", err);
    res.send(err);
  }
};

export default restaurantController;
