import express from "express";
import { create_channel, getChannels } from "../controllers/channel.js";

const router = express.Router();

router.post("/create", create_channel);
router.get("/", getChannels);
export default router;