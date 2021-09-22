import { Router } from "express";
import {
  createTodo,
  getAllTodos,
  getTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo";

const todoRouter = Router();

todoRouter.route("/").get(getAllTodos).post(createTodo);
todoRouter.route("/:id").get(getTodo).patch(updateTodo).delete(deleteTodo);

export { todoRouter };
