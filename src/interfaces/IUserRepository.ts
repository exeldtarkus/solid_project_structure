export interface IUserRepository {
  getById(id: number): Promise<any>;
}
