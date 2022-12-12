import { Router, Request, Response } from "express";
import { Todo, Todos, TodoWithId } from "./todo.model";

const router = Router();

router.get("/", async (req: Request, res: Response<TodoWithId[]>) => {
  const results = await Todos.find();
  const todos = await results.toArray();
  res.json(todos);
});

export default router;
