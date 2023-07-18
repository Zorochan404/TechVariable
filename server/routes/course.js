import express from "express"
import {addCourse, deleteCourse, updateCourse, findCourse, randomCourse, rateCourse} from "../controllers/course.js";
import { verifyT } from "../verifyToken.js";


const router = express.Router();


router.post("/", verifyT, addCourse)
router.put("/:id", verifyT, updateCourse)
router.delete("/:id", verifyT, deleteCourse)
router.get("/find/:id", findCourse) 
router.get("/trend/:id", addCourse)
router.get("/random/:id", randomCourse)
router.put("/rating/:id", rateCourse)




export default router;