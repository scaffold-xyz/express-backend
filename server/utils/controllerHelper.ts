import * as ResponseHelper from "./responseHelper";
import * as Utils from "./helper";
import { Response } from "express";
import { SCOPE } from "./enums";

type ControllerHelperParams<T> = {
  res: Response;
  validationSchema: any;
  serviceMethod: (
    data: T
  ) => Promise<{ data: any; message: string; error: any }>;
  validationData: any;
  logMessage: string;
  onSuccess?: (res: Response, data: any, message: string) => Response | void;
  onError?: (res: Response, error: any, message: string) => Response;
  scope: SCOPE;
};

type ParameterLessControllerHelperParams = {
  res: Response;
  serviceMethod: () => Promise<{ data: any; message: string; error: any }>;
  logMessage: string;
  scope: SCOPE;
};

export const ControllerHelper = async <T>({
  res,
  logMessage,
  validationSchema,
  validationData,
  serviceMethod,
  onSuccess = ResponseHelper.success,
  onError = ResponseHelper.badRequest,
  scope,
}: ControllerHelperParams<T>): Promise<Response | void> => {
  try {
    Utils.logInfo({
      message: `${logMessage} API received for ${scope}`,
      data: JSON.stringify({ validationData }),
    });
    const parsedData = validationSchema.safeParse(validationData);

    if (!parsedData.success) {
      Utils.logError({
        message: "Field validation error",
        data: JSON.stringify(parsedData.error.errors),
      });
      return onError(res, parsedData.error.errors, "Invalid Credentials");
    }

    const { data, message, error } = await serviceMethod(parsedData.data);

    if (error) {
      Utils.logError({
        message: "Error 400",
        data: JSON.stringify({ error }),
      });
      return onError(res, error, message);
    }

    Utils.logInfo({ message: "Success", data: JSON.stringify({ data }) });
    if (data?.shouldRedirect) {
      return ResponseHelper.redirect(res, data);
    } else {
      return onSuccess(res, data, message);
    }
  } catch (error: any) {
    Utils.logError({
      message: "Internal Server Error",
      data: JSON.stringify({ error }),
    });
    return ResponseHelper.error(res, error, "Internal Server Error");
  }
};

export const ParameterLessControllerHelper = async ({
  res,
  serviceMethod,
  logMessage,
  scope,
}: ParameterLessControllerHelperParams): Promise<Response> => {
  try {
    Utils.logInfo({
      message: `${logMessage} API received for ${scope}`,
      data: "Fetching data",
    });
    const { data, message, error } = await serviceMethod();

    if (error) {
      Utils.logError({ message: "Error 400", data: JSON.stringify({ error }) });
      return ResponseHelper.badRequest(res, error, message);
    }

    Utils.logInfo({ message: "Success", data: JSON.stringify({ data }) });
    return ResponseHelper.success(res, data, message);
  } catch (error: any) {
    Utils.logError({
      message: "Internal Server Error",
      data: JSON.stringify({ error }),
    });
    return ResponseHelper.error(res, error, "Internal Server Error");
  }
};
