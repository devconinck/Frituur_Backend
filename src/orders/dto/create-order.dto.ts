import { ApiProperty } from '@nestjs/swagger';

export class CreateOrderDto {
  @ApiProperty()
  customerId: number;

  @ApiProperty()
  pickup: Date;
}
