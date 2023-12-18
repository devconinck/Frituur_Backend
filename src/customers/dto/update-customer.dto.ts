import { ApiProperty } from '@nestjs/swagger';

export class UpdateCustomerDto {
  @ApiProperty()
  name?: string;

  @ApiProperty()
  lastName?: string;

  @ApiProperty()
  birthDate?: Date;
}
