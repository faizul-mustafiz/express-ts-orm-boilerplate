import { NextFunction, Request, Response } from 'express';
import { Success } from '../responses/httpResponse';

const basicGet = async (req: Request, res: Response, next: NextFunction) => {
  try {
    /**
     * * send 200 success response
     * @function Success()
     * @param {Response,HttpResponsePayload}
     */
    return Success(res, {
      message: 'Your-success-message',
      data: {},
    });
  } catch (error: any) {
    error.origin = error.origin ? error.origin : 'your-error-origin';
    error.message = error.message ? error.message : 'your-error-message';
    next(error);
  }
};

export const exampleController = {
  basicGet,
};
