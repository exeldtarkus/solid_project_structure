import { EHttpResponseStatus } from '../enums/HttpResponseEnum';

export interface IBaseResponse<T = any> {
  data?: T;
  requestId?: string;
  message: string;
  timestamp?: string;
  status: EHttpResponseStatus | number;
  isSuccess: boolean;
}
