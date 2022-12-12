import { Router } from "express";
import * as todoHandlers from "./todos.handlers";
const router = Router();

router.get("/", todoHandlers.findAll);

export default router;
