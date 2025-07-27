import express from "express";
import cors from "cors";
import "dotenv/config";
import viewBugs from "./Routes/viewbugs.js";
import userRouter from "./Routes/user.js";
import connectDB from "./config/db.js";

const app = express();

app.use(express.json({ limit: "500mb", extended: true }));
app.use(express.urlencoded({ limit: "500mb", extended: true }));
app.use(cors());

app.use("/viewbugs", viewBugs);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3500;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server Running on Port: http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("DB connection failed:", error);
  });
