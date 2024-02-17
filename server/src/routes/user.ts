import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getUser,
} from "../controllers/user.controller";
const router = express.Router();

router.get("/api/user", getUser);
router.post("/api/user", addUser);
router.put("/api/user", editUser);
router.delete("/api/user/:_id", deleteUser);

export default router;
