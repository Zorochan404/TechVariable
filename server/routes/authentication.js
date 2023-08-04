import express from "express"
import { logout, resetPass, resetPassword, signin, signup} from "../controllers/authentication.js";


const router = express.Router();




router.post("/signup", signup)
router.post("/signin", signin)
router.post("/google", )
router.post('/logout', logout)
router.post('/v1/password/reset', resetPassword)
router.get('/v1/password/reset/:token', resetPass).put(resetPass)






export default router;