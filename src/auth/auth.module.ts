import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { CustomersModule } from 'src/customers/customers.module';
import { jwtConstants } from './constants';

@Module({
  imports: [
    CustomersModule,
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signInOptions: { expiresIn: '60s' },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
