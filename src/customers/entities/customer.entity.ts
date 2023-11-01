import { Customer } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerEntity implements Customer {
  @ApiProperty()
  firstName: string;
  @ApiProperty()
  lastName: string;
  @ApiProperty()
  birthDate: Date;
  @ApiProperty()
  phone: string;
  @ApiProperty()
  id: number;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createdAt: Date;
}
