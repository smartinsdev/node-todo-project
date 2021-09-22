import mongoose from "mongoose";

export const connectDB = (url: string) => {
  return mongoose.connect(url, () => console.log("Mongo Connect"));
};
