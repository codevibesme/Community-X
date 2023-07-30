import express from "express";
import { sendMsg, getMessage } from "../controllers/chat.js";

const router = express.Router();
router.get("/:channelId", getMessage);
router.post("/send", sendMsg);
export default router;