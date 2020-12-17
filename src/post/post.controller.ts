import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { PostService } from './post.service';
import { CreatePostDto,} from './dtos';

const uniqueResponse = (message, data)=>{
  return {
    message,
    data
  } 
}
@ApiTags("Posts")
@Controller('post')
export class PostController {
  constructor(private postService: PostService) {}

  @Get()
  async getAll() {
    const data =  await this.postService.getAll();
    return uniqueResponse("Get all data", data)
  }
  @Get(':id')
  // ParseIntPipe Convierte el Parametro a number si puede
  async getOne(@Param('id', ParseIntPipe ) id: number) {
    let data = await this.postService.getOne(id) 

    
    return uniqueResponse(data ? "Get by id" : "No se encontro coincidencia", data)
  }
  @Post()
  async creteOne(@Body() dto: CreatePostDto) {
    const postCreated = await this.postService.createOne(dto);
    
    return {message: "Post created", postCreated}
  }
    // @Put(':id')
    // async editOne(@Param('id', ParseIntPipe) id , @Body() dto: EditPostDto) {
      

    // }

  @Delete(':id')
  async deleteOne(@Param('id') id: string) {
    const data  = await  this.postService.deleteOne(id)
    return uniqueResponse("Deleted", data)
  }
}
