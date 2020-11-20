import { IsArray, IsBoolean, IsString } from 'class-validator';
import { PostCategory } from '../enums';

export class CreatePostDto {
  @IsString()
  title: string;
  @IsString()
  category: PostCategory;
  @IsArray()
  @IsString({each: true}) //c/u de los valores del Array debe ser string
  tags: string[];
  @IsBoolean()
  status: boolean;
}
