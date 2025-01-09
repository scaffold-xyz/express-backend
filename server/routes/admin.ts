import express, { RequestHandler } from "express";
const router = express.Router();

import * as adminController from "../controllers/admin";

router.post(
  "/add-article",
  adminController.addArticleController as RequestHandler
);

export default router;
