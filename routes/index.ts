import { Router } from "express";
import authRouter from "./authRoutes";
import testRouter from "./testRoutes";

const router = Router();
router.use(authRouter)
router.use(testRouter)


export default router;
