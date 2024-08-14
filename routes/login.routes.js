import { Router } from "express";
import { getLoginPage } from "../controllers/login.controller.js";

const router = Router();

router.get("/", getLoginPage);

export default router;
