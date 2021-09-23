import express from "express";
import { todoRouter } from "./routers/todo";
import { connectDB } from "./db/connect";
import { errorHandlerMiddleware } from "./middleware/error-handler";
import { notFound } from "./routers/not-found";

require("dotenv").config();

const app = express();
//middleware
app.use(express.json());
app.use(errorHandlerMiddleware);
//routers
app.use("/api/v1/todo", todoRouter);
app.use(notFound);

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
