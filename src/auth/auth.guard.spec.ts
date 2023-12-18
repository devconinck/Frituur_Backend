import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {
  let guard: AuthGuard;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthGuard,
        {
          provide: JwtService,
          useValue: {
            verifyAsync: jest.fn(),
          },
        },
      ],
    }).compile();

    guard = module.get<AuthGuard>(AuthGuard);
    jwtService = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should return true if the token is valid', async () => {
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {
            authorization: 'Bearer valid_token',
          },
        }),
      }),
    } as unknown as ExecutionContext;

    jwtService.verifyAsync = jest.fn().mockResolvedValue({});
    await expect(guard.canActivate(context)).resolves.toBe(true);
  });

  it('should throw UnauthorizedException if the token is invalid', async () => {
    const context = {
      switchToHttp: () => ({
        getRequest: () => ({
          headers: {
            authorization: 'Bearer invalid_token',
          },
        }),
      }),
    } as unknown as ExecutionContext;

    jwtService.verifyAsync = jest.fn().mockRejectedValue(new Error());
    await expect(guard.canActivate(context)).rejects.toThrow(
      UnauthorizedException,
    );
  });
});
