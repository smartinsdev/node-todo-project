import express from "express";
import { todoRouter } from "./routers/todo";
import { connectDB } from "./db/connect";

require("dotenv").config();

const app = express();
app.use(express.json());
//routers
app.use("/api/v1/todo", todoRouter);
const port = process.env.PORT || 3000;

const startApp = async () => {
  try {
    connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is running ${port}`));
  } catch (error) {
    console.log(error);
  }
};

startApp();
