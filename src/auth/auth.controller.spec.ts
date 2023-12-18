import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PrismaService } from '../prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { Role } from '@prisma/client';
import { HttpException } from '@nestjs/common';

describe('AuthController', () => {
  let controller: AuthController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AuthController],
      providers: [AuthService, PrismaService, JwtService],
    }).compile();

    controller = module.get<AuthController>(AuthController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('register', () => {
    it('should return an error if the passwords do not match', async () => {
      const data = {
        name: 'test',
        email: 'test@gmail.com',
        password: 'test1234',
        passwordConfirm: 'test12345',
        role: Role.USER,
      };
      await expect(controller.register(data)).rejects.toThrow(HttpException);
    });

    it('should return an object with a token', async () => {
      const data = {
        name: 'test',
        email: 'test@gmail.com',
        password: 'test1234',
        passwordConfirm: 'test1234',
        role: Role.USER,
      };
      const result = await controller.register(data);
      expect(result.statusCode).toEqual(201);
      expect(result.message).toEqual('User created successfully');
    });

    it('should return an error if the user already exists', async () => {
      const data = {
        name: 'test',
        email: 'test@gmail.com',
        password: 'test1234',
        passwordConfirm: 'test1234',
        role: Role.USER,
      };
      await expect(controller.register(data)).rejects.toThrow(HttpException);
    });
  });

  describe('login', () => {
    it('should return an error if the user does not exist', async () => {
      const data = {
        email: 'test5@gmail.com',
        password: 'test1234',
      };
      await expect(controller.login(data)).rejects.toThrow(HttpException);
    });

    it('should return an error if the password is incorrect', async () => {
      const data = {
        email: 'test@gmail.com',
        password: 'test12345',
      };

      await expect(controller.login(data)).rejects.toThrow(HttpException);
    });

    it('should return an object with a token', async () => {
      const data = {
        email: 'test@gmail.com',
        password: 'test1234',
      };
      const result = await controller.login(data);
      expect(result.accessToken).toBeDefined();
    });
  });
});
