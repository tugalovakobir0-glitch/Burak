import express, { Request, Response } from "express";
import { T } from "../libs/types/common";
import MemberService from "../models/Member.service";

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
restaurantController.processLogin = (req: Request, res: Response) => {
  try {
    console.log("Postprocess");
    res.send("DONE");
  } catch (err) {
    console.log("Error Postprocess:", err);
  }
};
restaurantController.processSignup = (req: Request, res: Response) => {
  try {
    console.log("PostprocessSignup");
    res.send("DONE");
  } catch (err) {
    console.log("Error PostprocessSignup:", err);
  }
};

export default restaurantController;
