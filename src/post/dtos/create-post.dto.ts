import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsBoolean, IsString } from 'class-validator';
import { PostCategory } from '../enums';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  category  : PostCategory;
  
  @ApiProperty()
  @IsArray()
  
  @ApiProperty()
  @IsString({each: true}) //c/u de los valores del Array debe ser string
  tags: string[];
  
  @ApiProperty()
  @IsBoolean()
  status: boolean;
}
