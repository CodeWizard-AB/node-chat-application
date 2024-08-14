import { Router } from "express";
import { getInboxPage } from "../controllers/inbox.controller.js";

const router = Router();

router.get("/", getInboxPage);

export default router;
