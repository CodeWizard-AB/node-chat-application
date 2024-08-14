import { Router } from "express";
import { getUsersPage } from "../controllers/users.controlller.js";

const router = Router();

router.get("/", getUsersPage);

export default router;
