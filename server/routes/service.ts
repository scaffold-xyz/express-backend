import express from "express";

const router = express.Router();

import * as controllers from "../controllers/service";

router.get("/health", controllers.healthCheck);

export default router;
