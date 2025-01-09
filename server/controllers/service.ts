import { Request, Response } from "express";

// Health check route
export const healthCheck = (req: Request, res: Response) => {
  res.json({ status: "OK" });
};
