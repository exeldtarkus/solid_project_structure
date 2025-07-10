import { Request, Response, NextFunction } from 'express';
import { EHttpResponseStatus } from '../types/enums/HttpResponseEnum';
import { BaseResponder } from '../helpers/BaseResponderHelper';

export function notFoundHandler(req: Request, res: Response, next: NextFunction) {
  return BaseResponder.send(res, {
    status: EHttpResponseStatus.NOT_FOUND,
    isSuccess: false,
    message: `Route ${req.originalUrl} not found`,
    requestId: (req as any).requestId,
    timestamp: new Date().toISOString(),
  });
}
