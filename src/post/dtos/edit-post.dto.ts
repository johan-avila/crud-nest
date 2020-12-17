import { OmitType, PartialType} from '@nestjs/swagger'

import { CreatePostDto } from './create-post.dto';

export class EditPostDto extends PartialType(
  OmitType(CreatePostDto, ['category'] as const),
) {}


