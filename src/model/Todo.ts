import { Document, Model, Schema, model } from "mongoose";

interface iTodo extends Document {
  name: string;
  completed: boolean;
}

const TodoSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
    maxlength: [20, "name can not be more than 20 characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

export const Todo: Model<iTodo> = model("Todo", TodoSchema);
