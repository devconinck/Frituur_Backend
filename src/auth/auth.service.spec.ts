import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { HttpException } from '@nestjs/common';
import { Role } from '@prisma/client';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService, PrismaService, JwtService],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('register', () => {
    it('should return an error if the passwords do not match', async () => {
      const data = {
        name: 'test',
        email: 'testRegister@gmail.com',
        password: 'test1234',
        passwordConfirm: 'test12345',
        role: Role.USER,
      };
      await expect(service.register(data)).rejects.toThrow(HttpException);
    });

    it('should return an object with a token', async () => {
      const data = {
        name: 'test',
        email: 'testingRegister@gmail.com',
        password: 'test1234',
        passwordConfirm: 'test1234',
        role: Role.USER,
      };
      const result = await service.register(data);
      expect(result).toBeDefined();
      expect(result.statusCode).toEqual(201);
      expect(result.message).toEqual('User created successfully');
    });

    it('should return an error if the user already exists', async () => {
      const data = {
        name: 'test',
        email: 'testingRegister@gmail.com',
        password: 'test1234',
        passwordConfirm: 'test1234',
        role: Role.USER,
      };
      await expect(service.register(data)).rejects.toThrow(HttpException);
    });
  });

  describe('login', () => {
    it('should return an error if the user does not exist', async () => {
      const data = {
        email: 'randomTest@gmail.com',
        password: 'test1234',
      };
      await expect(service.login(data.email, data.password)).rejects.toThrow(
        HttpException,
      );
    });

    it('should return an error if the password is incorrect', async () => {
      const data = {
        email: 'testingRegsiter@gmail.com',
        password: 'test123457',
      };

      await expect(service.login(data.email, data.password)).rejects.toThrow(
        HttpException,
      );
    });

    it('should return an object with a token', async () => {
      const data = {
        email: 'testingRegister@gmail.com',
        password: 'test1234',
      };
      const result = await service.login(data.email, data.password);
      expect(result).toBeDefined();
      expect(result.accessToken).toBeDefined();
    });
  });
});
