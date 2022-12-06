import express from "express";

import MessageResponse from "../interfaces/MessageResponse";
import todo from "../api/todos/todo.route";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/todo", todo);

export default router;
