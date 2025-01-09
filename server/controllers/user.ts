import { RequestHandler } from "express";

import { ParameterLessControllerHelper } from "../utils/controllerHelper";
import { SCOPE } from "../utils/enums";

import * as UserService from "../services/user/index";

export const getArticleController: RequestHandler = async (req, res) => {
  await ParameterLessControllerHelper({
    res,
    logMessage: "Get Article",
    serviceMethod: UserService.getArticle,
    scope: SCOPE.USER,
  });
};
