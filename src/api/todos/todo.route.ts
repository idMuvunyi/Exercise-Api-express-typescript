import { Router, Request, Response } from "express";
import Todo from "./todo.model";

const router = Router();

router.get("/", (req: Request, res: Response<Todo[]>) => {
  res.json([
    {
      exercise: "Run 100 meters / day",
      done: false,
    },
  ]);
});

export default router;
