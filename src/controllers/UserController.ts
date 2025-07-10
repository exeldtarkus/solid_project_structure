import { Request, Response } from 'express';
import { UserService } from '../services/UserService';
import { UserRepository } from '../repositories/UserRepository';
import { IUserCreateRequest } from '../types/dto/CreateUserDto';

const userService = new UserService(new UserRepository());

export const getUser = async (req: Request, res: Response) => {
  try {
    const user = await userService.getUserProfile(Number(req.params.id));
    res.json(user);
  } catch (e: any) {
    res.status(404).json({ error: e.message });
  }
};

export const createUser = async (
  req: IUserCreateRequest,
  res: Response
) => {
  const { name, email, password } = req.body;

  console.log('Creating user:', { name, email, password });

  return res.status(201).json({
    message: 'User created successfully',
    user: { name, email },
  });
};
