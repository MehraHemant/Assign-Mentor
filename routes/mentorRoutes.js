import express from "express";
import {
  add_students,
  create_mentor,
  remove_students,
} from "../controllers/mentorController.js";

const router = express.Router();

router.post("/create", create_mentor);
router.post("/add_students/:id", add_students);
router.post("/remove_students/:id", remove_students);

export default router;
