import { $Enums, Customer, Role } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class CustomerEntity implements Customer {
  roles: $Enums.Role;
  name: string;
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
  password: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  role: Role;
}
