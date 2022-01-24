import express from "express";
import { registerUser } from "../controllers/userController.js";
import { Auth } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").post(registerUser);

export default router;
