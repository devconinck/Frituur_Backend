import { Reflector } from '@nestjs/core';
import { Test, TestingModule } from '@nestjs/testing';
import { ExecutionContext } from '@nestjs/common';
import { Role } from '@prisma/client';
import { RolesGuard } from './roles.guard';

describe('RolesGuard', () => {
  let guard: RolesGuard;
  let reflector: Reflector;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RolesGuard, Reflector],
    }).compile();

    guard = module.get<RolesGuard>(RolesGuard);
    reflector = module.get<Reflector>(Reflector);
  });

  it('should be defined', () => {
    expect(guard).toBeDefined();
  });

  it('should allow access if no role is set', () => {
    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(undefined);
    const context = {
      getHandler: () => {},
      getClass: () => {},
      switchToHttp: () => ({
        getRequest: () => ({}),
      }),
    } as unknown as ExecutionContext;
    expect(guard.canActivate(context)).toBe(true);
  });

  it('should allow access if user role matches required role', () => {
    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(Role.USER);
    const context = {
      getHandler: () => {},
      getClass: () => {},
      switchToHttp: () => ({
        getRequest: () => ({
          user: { role: Role.USER },
        }),
      }),
    } as unknown as ExecutionContext;
    expect(guard.canActivate(context)).toBe(true);
  });

  it('should deny access if user role does not match required role', () => {
    jest.spyOn(reflector, 'getAllAndOverride').mockReturnValue(Role.ADMIN);
    const context = {
      getHandler: () => {},
      getClass: () => {},
      switchToHttp: () => ({
        getRequest: () => ({
          user: { role: Role.USER },
        }),
      }),
    } as unknown as ExecutionContext;
    expect(guard.canActivate(context)).toBe(false);
  });
});
