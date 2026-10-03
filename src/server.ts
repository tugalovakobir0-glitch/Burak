import dotenv from "dotenv";
dotenv.config();

import mongoose from "mongoose";
// mongoose.set("strictQuery", true);
import app from "./app";

mongoose
  .connect(process.env.MONGO_URL as string, {})
  .then((data) => {
    console.log("mongoDb succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT, function () {
      console.info(`The server in succedfully on port:${PORT}`);
      console.info(`Admin project on http://localhost:${PORT}/admin \n`);
    });
  })
  .catch((err) => console.log(`ERROR:`, err));
