import express from "express"
import { signin, signup, tutorsignin, tutorsignup } from "../controllers/authentication.js";


const router = express.Router();


//signup

router.post("/signup", signup)

//signin

router.post("/signin", signin)

//google signin

router.post("/google", )


//tutor signup
router.post("/tutorsignup", tutorsignup)



//user signin
router.post("/tutorsignin", tutorsignin)



export default router;