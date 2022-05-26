import { isInt, IsNumber, isNumber, IsString } from 'class-validator';
import { Comment } from '../entities/comment.entity';

export class CreateCommentDto extends Comment {
  @IsString()
  comment: string;

  @IsNumber()
  user_id: number;
}
