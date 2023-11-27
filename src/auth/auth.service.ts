import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { RegisterDto } from './dto/register.dto';
import { compare, hash } from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { jwtConstants } from './constants';

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
    data.password = await hash(data.password, 12);
    const createUser = await this.prisma.customer.create({
      data: data,
    });
    if (createUser) {
      return {
        statusCode: 200,
        message: 'User created successfully',
      };
    }
  }

  async login(data: LoginDto) {
    const user = await this.prisma.customer.findFirst({
      where: {
        email: data.email,
      },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    const checkPassword = await compare(data.password, user.password);

    if (checkPassword) {
      const accessToken = this.generateJWT({
        sub: user.id,
        name: user.name,
        email: user.email,
      });
      return {
        statusCode: 200,
        message: 'User logged in successfully',
        accessToken: accessToken,
      };
    } else {
      throw new HttpException(
        'User or password doesnt match',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }

  async profile(id: number) {
    const user = await this.prisma.customer.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return {
      statusCode: 200,
      data: user,
    };
  }

  generateJWT(payload: any) {
    return this.jwtService.sign(payload, {
      secret: jwtConstants.secret,
      expiresIn: jwtConstants.expired,
    });
  }
}
