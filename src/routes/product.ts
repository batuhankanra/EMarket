import { Router } from "express";
import { GetUser } from "../controller/user/getUser";

const router=Router()


router.get('/',GetUser)

export default router