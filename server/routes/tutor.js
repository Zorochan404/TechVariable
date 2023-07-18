import express from "express"
import { update, deleteTutor, find} from "../controllers/tutor.js";
import { verifyT } from "../verifyToken.js";


const router = express.Router();


//update
router.put("/:id", verifyT, update)


//delete
router.delete("/:id", verifyT, deleteTutor)


//get
router.get("/find/:id", find)



export default router