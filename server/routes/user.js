import express from "express"

import {
    getUser,getAllUsers

} from "../controllers/userControllers.js"

import {verifyToken} from "../middleware/authMiddleware.js"

const router=express.Router()

router.get("/:id",verifyToken,getUser)
router.get("/",verifyToken,getAllUsers)

export default router

