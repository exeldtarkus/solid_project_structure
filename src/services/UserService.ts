import { IUserRepository } from '../interfaces/IUserRepository';

export class UserService {
  constructor(private userRepo: IUserRepository) {}

  async getUserProfile(id: number) {
    const user = await this.userRepo.getById(id);
    if (!user) throw new Error('User not found');
    return user;
  }
}
