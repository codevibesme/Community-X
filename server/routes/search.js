import express from "express";
import { searchChannel } from "../controllers/search.js";

const router = express.Router();

router.get("/:name", searchChannel);

export default router;