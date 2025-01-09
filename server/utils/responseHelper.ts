import { Response } from "express";
import HttpStatus, { StatusCodes } from "http-status-codes";

export const created = (res: Response, data: any, message: string = ""): Response =>
  res.status(HttpStatus.CREATED).send({
    success: true,
    message,
    data,
  });

export const success = (res: Response, data: any, message: string = ""): Response =>
  res.status(HttpStatus.OK).send({
    success: true,
    message,
    data,
  });

export const error = (res: Response, error: any, message: string): Response =>
  res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({
    success: false,
    message,
    data: error,
  });

export const notFound = (res: Response, message: string): Response =>
  res.status(HttpStatus.NOT_FOUND).send({
    success: false,
    data: { message: message || "Not found." },
  });

export const badRequest = (res: Response, error: any, message: string): Response =>
  res.status(HttpStatus.BAD_REQUEST).json({
    success: false,
    message,
    data: error,
  });

export const throwError = (res: Response, err: any): Response => {
  const error = err.details.reduce((prev: any, curr: any) => {
    prev[curr.path[0]] = curr.message.replace(/"/g, "");
    return prev;
  }, {});

  const errorMessage = Object.values(error);

  return res.status(HttpStatus.UNPROCESSABLE_ENTITY).json({
    success: false,
    data: { message: errorMessage[0] },
  });
};

export const notAuthorized = (res: Response, error: any): Response =>
  res.status(HttpStatus.UNAUTHORIZED).send({
    success: false,
    data: { message: error },
  });

export const tooManyRequests = (res: Response, data: any, retryTime: any): Response =>
  res.status(StatusCodes.TOO_MANY_REQUESTS).send({
    success: false,
    data: { message: data, otpExpireIn: retryTime },
  });

export const tooLargeContent = (res: Response, message: any): Response =>
  res.status(HttpStatus.REQUEST_HEADER_FIELDS_TOO_LARGE).send({
    success: false,
    data: {
      message,
    },
  });

export const redirect = (res: Response, data: any): void =>
  res.redirect(`${data.redirectUrl}`);
