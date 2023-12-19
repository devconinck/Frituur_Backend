//src/auth/entity/auth.entity.ts
import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  user: {
    id: number;
    name: string;
    email: string;
    role: string;
  };
  @ApiProperty()
  accessToken: string;
}
