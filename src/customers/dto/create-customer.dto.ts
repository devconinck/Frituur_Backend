import { ApiProperty } from '@nestjs/swagger';
export class CreateCustomerDto {
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
}
