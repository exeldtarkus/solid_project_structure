import { Response } from 'express';
import moment from 'moment';
import { IBaseResponse } from '../types/response/IBaseResponse';

export class BaseResponder {
  static send<T>(res: Response, payload: IBaseResponse<T>) {
    return res.status(payload.status).json({
      data: payload.data,
      isSuccess: payload.isSuccess,
      message: payload.message,
      status: payload.status,
      requestId: payload.requestId,
      timestamp: payload.timestamp ?? moment().utc().format('YYYY-MM-DDTHH:mm:ssZ'),
    });
  }
}
