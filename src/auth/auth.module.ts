import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CustomersModule } from 'src/customers/customers.module';
import { jwtConstants } from './constants';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { CustomersService } from 'src/customers/customers.service';
import { JwtStrategy } from './local.auth';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [
    PrismaModule,
    CustomersModule,
    PassportModule.register({
      defaultStrategy: 'jwt',
      property: 'user',
      session: false,
    }),
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: jwtConstants.expired },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, CustomersService, JwtStrategy],
})
export class AuthModule {}
