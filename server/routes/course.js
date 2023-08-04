import express from "express"
import {addCourse, deleteCourse, updateCourse, findCourse, randomCourse, rateCourse} from "../controllers/course.js";
import { verifyToken } from "../verifyToken.js";



const router = express.Router();


router.post("/",verifyToken, addCourse)
router.put("/:id",verifyToken,  updateCourse)
router.delete("/:id", verifyToken, deleteCourse)
router.get("/find/:id", findCourse) 
router.get("/trend/:id", addCourse)
router.get("/random/:id", randomCourse)
router.put("/rating/:id", rateCourse)




export default router;