import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>
    ) {}
    async getAll() {
        const data = await this.postRepository.find()
        return data
        
    }
    async getOne(id: number) {
        const  data = await this.postRepository.findOne(id)
        return data
    }
    async createOne(object) {
        const postCreated = await this.postRepository.save(object)       
        
        return postCreated
    }
    // async editOne(id, object) {
    //     const post = await this.postRepository.findOne(id);

    //     if (!post) throw new NotFoundException('Post does not exist');
        
    //     const editedPost = Object.assign(post, object);
    
    //     return await this.postRepository.save(editedPost)
    // }
    async deleteOne(id) {
        return this.postRepository.delete(id)
    }
}
