import express from "express";
import {
  addUser,
  deleteUser,
  editUser,
  getSingleUser,
  getUser,
  login,
  uploadImage,
} from "../controllers/user.controller";
import { upload } from "../library/multer";
const router = express.Router();

router.post("/api/user/login", login);

router.get("/api/user", getUser);

router.get("/api/user/:_id", getSingleUser);

router.post("/api/user", addUser);

router.put("/api/user", editUser);

router.delete("/api/user/:_id", deleteUser);

router.post("/api/product/upload/:_id", upload.single("image"), uploadImage);

export default router;
