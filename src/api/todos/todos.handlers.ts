import { Request, Response } from "express";
import { Todos, TodoWithId } from "./todo.model";

export async function findAll(req: Request, res: Response<TodoWithId[]>) {
  const results = await Todos.find();
  const todos = await results.toArray();
  res.json(todos);
}
