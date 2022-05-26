import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { EntityNotFoundError } from 'src/utils/errors/EntityNotFoundError';
import { IComment } from './comment.schema';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    @InjectModel('Comment') private readonly commentModel: Model<IComment>,
  ) {}

  async create(createCommentDto: CreateCommentDto) {
    const newComment = new this.commentModel(createCommentDto);

    const savedComment = await newComment.save();

    return formatComment(savedComment);
  }

  async findAll() {
    const comments = await this.commentModel.find();

    return comments.map((comment: IComment) => formatComment(comment));
  }

  async findOne(id: string) {
    try {
      const comment: IComment = await this.commentModel.findById(id);

      return formatComment(comment);
    } catch (err) {
      throw new EntityNotFoundError(`Comment with id ${id} was not found`);
    }
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    this.findOne(id);

    await this.commentModel.findOneAndUpdate({ _id: id }, updateCommentDto);

    const updatedComment = await this.findOne(id);

    return updatedComment;
  }

  async remove(id: string) {
    await this.findOne(id);

    return await this.commentModel.findByIdAndDelete(id);
  }
}

const formatComment = (comment: IComment) => ({
  id: comment.id,
  comment: comment.comment,
  user_id: comment.user_id,
});
