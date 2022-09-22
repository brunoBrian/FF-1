import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommentService } from './comment.service';
import { CommentController } from './comment.controller';
import { CommentSchema } from './comment.schema';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'Comment',
        schema: CommentSchema,
      },
    ]),
    HttpModule,
  ],
  controllers: [CommentController],
  providers: [CommentService],
})
export class CommentModule {}
