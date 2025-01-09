import { Request, Response } from "express";

import { ControllerHelper } from "../utils/controllerHelper";
import { SCOPE } from "../utils/enums";

import * as AdminService from "../services/admin/index";
import * as ZODSchema from "../zod/index";

export const addArticleController = async (req: Request, res: Response) => {
  //   const article = req.body;
  //   const result = await addArticle(article);
  return ControllerHelper({
    res,
    logMessage: "Add Article",
    validationSchema: ZODSchema.addArticleSchema,
    validationData: req.body,
    serviceMethod: AdminService.addArticle,
    scope: SCOPE.ADMIN,
  });
};
