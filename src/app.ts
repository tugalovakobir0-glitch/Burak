import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { MORGAN_FORMAT } from "./libs/config";

import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
import { T } from "./libs/types/common";

const MongoDbStore = ConnectMongoDBSession(session);
const store = new MongoDbStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** 1- ENTRANCE- kirish qismi **/
const app = express();
app.use(express.static(path.join(__dirname, "public"))); //Bu publicni tash qi muhitga ochiqlaydi
app.use(express.urlencoded({ extended: true })); //MidelWeri external pacage
app.use(express.json());
app.use(cookieParser());
app.use(morgan(MORGAN_FORMAT));

/** 2-SESSIONS- sekshinlar qismi **/
app.use(
  session({
    secret: String(process.env.SESSION_SECRET),
    cookie: {
      maxAge: 1000 * 3600 * 24 * 6, // 6h
    },
    store: store,

    resave: true,
    saveUninitialized: true,
  }),
);
app.use(function (req, res, next) {
  const sessionInstance = req.session as T;
  res.locals.member = sessionInstance.member;
  next();
});
/** 3- VIEWS- viewlar  qismi **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 4- ROUTERS- ruterlar qismi **/

app.use("/admin", routerAdmin); //Bssr-Ejs
app.use("/", router); //React

export default app;
