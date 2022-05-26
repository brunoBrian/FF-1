import { Injectable } from '@nestjs/common';
import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  private comments: Comment[] = [
    {
      id: 1,
      comment: 'Olá Bruno',
      user_id: 1,
    },
  ];

  create(createCommentDto: CreateCommentDto) {
    const id = this.comments.length + 1;

    const comment: Comment = {
      id,
      ...createCommentDto,
    };

    this.comments.push(comment);

    return this.comments;
  }

  findAll() {
    return this.comments;
  }

  findOne(id: number) {
    const comment = this.comments.find((comment) => comment.id === +id);

    if (!comment) {
      throw new EntityNotFoundError(`Comment with id ${id} was not found`);
    }

    return comment;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    const comment = this.findOne(id);

    const index = this.comments.indexOf(comment);

    const newComment = {
      ...comment,
      ...updateCommentDto,
    };

    this.comments[index] = newComment;

    return newComment;
  }

  remove(id: number) {
    const comment = this.findOne(id);

    const index = this.comments.indexOf(comment);

    this.comments.splice(index, 1);
  }
}
