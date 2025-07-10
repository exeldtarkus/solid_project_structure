import { Request } from 'express';

export interface IUserCreateRequest extends Request {
  body: {
    name: string;
    email: string;
    password: string;
  };
}