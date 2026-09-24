import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDb succeed");
    const PORT = process.env.PORT ?? 3003;
    console.log(`The server in succedfully on port:${PORT}`);
  })
  .catch((err) => console.log(`ERROR:`, err));
