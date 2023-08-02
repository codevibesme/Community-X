import express from "express";
import { addMember, create_channel, getChannel, getChannels } from "../controllers/channel.js";

const router = express.Router();

router.post("/create", create_channel);
router.get("/:id", getChannel);
router.get("/", getChannels);
router.put("/add/:id", addMember);
export default router;