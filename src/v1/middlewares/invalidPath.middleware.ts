import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from '../errors/BadRequestError';

export const InvalidPath = (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  /**
   * * if the path is invalid send 400 BadRequestError response
   *@function BadRequest(res,payload)
   */
  try {
    throw new BadRequestError('InvalidPath-error', 'This path is not valid,');
  } catch (error: any) {
    next(error);
  }
};
