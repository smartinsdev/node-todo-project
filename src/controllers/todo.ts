import { createCustomError } from "../errors/costum-errors";
import { NextFunction, Request, Response } from "express";
import { asyncWrapper } from "../middleware/async";
import { Todo } from "../model/Todo";

const getAllTodos = asyncWrapper(async (req: Request, res: Response) => {
  const todos = await Todo.find({});
  res.status(200).json({ todos });
});

const createTodo = asyncWrapper(async (req: Request, res: Response) => {
  const todo = await Todo.create(req.body);
  res.status(201).json({ todo });
});

const getTodo = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: todoID } = req.params;
    const todo = await Todo.findOne({ _id: todoID });
    if (!todo) {
      return next(createCustomError(`No task with id : ${todoID}`, 404));
    }

    res.status(200).json({ todo });
  }
);

const deleteTodo = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: todoID } = req.params;
    const todo = await Todo.findOneAndDelete({ _id: todoID });
    if (!todo) {
      return next(createCustomError(`No task with id : ${todoID}`, 404));
    }
    res.status(200).json({ todo });
  }
);

const updateTodo = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id: todoID } = req.params;

    const todo = await Todo.findOneAndUpdate({ _id: todoID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!todo) {
      return next(createCustomError(`No task with id : ${todoID}`, 404));
    }

    res.status(200).json({ todo });
  }
);

export { getAllTodos, createTodo, getTodo, deleteTodo, updateTodo };
