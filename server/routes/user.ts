import express from "express";

const router = express.Router();

import * as userController from "../controllers/user";

router.get("/get-article", userController.getArticleController);

export default router;
