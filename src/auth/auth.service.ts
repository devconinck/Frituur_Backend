import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { AuthEntity } from './entity/auth.entity';
import { Role } from '@prisma/client';
@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) {}

  async register(data: RegisterDto) {
    const checkUserExists = await this.prisma.customer.findFirst({
      where: {
        email: data.email,
      },
    });
    if (checkUserExists) {
      throw new HttpException('Email already exists', 400);
    }
    const passwordsMatch = data.password === data.passwordConfirm;

    if (!passwordsMatch) {
      throw new HttpException('Passwords dont match', 400);
    }

    data.password = await hash(data.password, 10);
    const createUser = await this.prisma.customer.create({
      data: {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role ? data.role : Role.USER,
      },
    });
    if (createUser) {
      return {
        statusCode: 201,
        message: 'User created successfully',
      };
    } else {
      throw new HttpException('Error creating user', 500);
    }
  }

  async login(email: string, password: string): Promise<AuthEntity> {
    const user = await this.prisma.customer.findFirst({
      where: {
        email: email,
      },
    });
    if (!user) {
      throw new HttpException(
        'Login failed: Your email or password is incorrect',
        HttpStatus.NOT_FOUND,
      );
    }

    const checkPassword = await compare(password, user.password);

    if (!checkPassword) {
      throw new HttpException(
        'Login failed: Your email or password is incorrect',
        HttpStatus.UNAUTHORIZED,
      );
    }
    const payload = { sub: user.id, role: user.role };
    return {
      role: user.role,
      id: user.id,
      accessToken: await this.jwtService.signAsync(payload),
    };
  }

  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: process.env.JWT_EXPIRES,
    });
  }
}
