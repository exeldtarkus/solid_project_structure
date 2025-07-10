
import { db } from '../database/Db';
import { IUserRepository } from '../interfaces/IUserRepository';

export class UserRepository implements IUserRepository {
  async getById(id: number): Promise<any> {
    return db('users').where({ id }).first();
  }
}
