import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreatePostDto } from './dtos';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAll() {
    const data =  await this.postService.getAll();
    return data
  }
  @Get(':id')
  // ParseIntPipe Convierte el Parametro a number si puede
  getOne(@Param('id', ParseIntPipe ) id: number): object {
    return this.postService.getOne(id)  
  }
  @Post()
  creteOne(@Body() dto: CreatePostDto) {
    return this.postService.createOne(dto)
  }
  @Put(':id')
  editOne(@Param('id') id: string, @Body() dto: CreatePostDto) {
    return this.postService.editOne(id, dto)
  }

  @Delete(':id')
  deleteOne(@Param('id') id: string) {
    return this.postService.deleteOne(id)
  }
}
