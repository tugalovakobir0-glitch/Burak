import express from "express";
import path from "path";

/** 1- ENTRANCE- kirish qismi **/
const app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** SESSIONS- sekshinlar qismi **/
/** 2- VIEWS- viewlar  qismi **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 1- ROUTERS- ruterlar qismi **/

export default app;
