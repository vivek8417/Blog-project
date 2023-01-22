import express from "express";
import { getAllBlog, addBlog, getBlogById } from "../controllers/blog-controller.js";

const router = express.Router()

router.get("/", getAllBlog)
router.post("/addBlog", addBlog)
router.get("/:id", getBlogById)

export default router