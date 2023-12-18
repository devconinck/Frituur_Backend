//src/auth/entity/auth.entity.ts
import { ApiProperty } from '@nestjs/swagger';

export class AuthEntity {
  @ApiProperty()
  role: string;
  @ApiProperty()
  id: number;

  @ApiProperty()
  accessToken: string;
}
