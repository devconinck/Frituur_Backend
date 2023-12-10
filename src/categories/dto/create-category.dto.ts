import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCategoryDto {
  @ApiProperty()
  @IsInt()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  @IsString()
  @MaxLength(25)
  @MinLength(4)
  name: string;
}
