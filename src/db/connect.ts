import mongoose, { MongooseOptions } from "mongoose";

export const connectDB = (url: string) => {
  return mongoose.connect(url, () => console.log("Mongo Connect"));
};
