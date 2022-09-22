import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { CommentModule } from './comment/comment.module';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    CommentModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
    CardsModule,
  ],
  providers: [],
})
export class AppModule {}
