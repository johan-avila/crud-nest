import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post)
        private postRepository: Repository<Post>
    ){}
    async getAll() {
        const data = await this.postRepository.find()
        console.log(data);
        return data
        
    }
    getOne(id: number): object{
        return {}
    }
    createOne(object): object{
        return {ok: "Create One"}
    }
    editOne(id, object): object{
        return {ok: "Edit One "}
    }
    deleteOne(id): object{
        return {ok: "Success Delete One"}
    }
}
