import express from "express";
import path from "path";
import router from "./router";
import routerAdmin from "./routerAdmin";
import morgan from "morgan";
import { MORGAN_FORMAT } from "./libs/config";

/** 1- ENTRANCE- kirish qismi **/
const app = express();
console.log(__dirname);
app.use(express.static(path.join(__dirname, "public")));
console.log(__dirname);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan(MORGAN_FORMAT));
import session from "express-session";
import ConnectMongoDBSession from "connect-mongodb-session";
const MongoDbStore = ConnectMongoDBSession(session);
const store = new MongoDbStore({
  uri: String(process.env.MONGO_URL),
  collection: "sessions",
});

/** SESSIONS- sekshinlar qismi **/
app.use(
  session({
    secret: "This is a secret",
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7, // 1 week
    },
    store: store,

    resave: true,
    saveUninitialized: true,
  }),
);
/** 2- VIEWS- viewlar  qismi **/
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 1- ROUTERS- ruterlar qismi **/

app.use("/admin", routerAdmin); //Bssr-Ejs
app.use("/", router); //React

export default app;
