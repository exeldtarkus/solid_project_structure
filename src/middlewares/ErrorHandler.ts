import { Request, Response, NextFunction } from 'express';
import { EHttpResponseStatus } from '../types/enums/HttpResponseEnum';
import { BaseResponder } from '../helpers/BaseResponderHelper';

export function errorHandler(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.status || EHttpResponseStatus.INTERNAL_SERVER_ERROR;
  const message = err.message || 'Internal Server Error';

  console.error(`[Error] ${message}`, err);

  return BaseResponder.send(res, {
    status,
    isSuccess: false,
    message,
    requestId: (req as any).requestId,
    timestamp: new Date().toISOString(),
  });
}
