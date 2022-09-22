import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpStatus,
  HttpCode,
} from '@nestjs/common';
import { IComment } from './comment.schema';
import { CommentService } from './comment.service';

@Controller('comments')
export class CommentController {
  // Instancia um objeto commentService e passa como parametro no construtor (injeção de dependencia acontecendo)
  constructor(private readonly commentService: CommentService) {}

  @Post()
  create(@Body() createCommentDto: IComment) {
    return this.commentService.create(createCommentDto);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commentService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommentDto: IComment) {
    return this.commentService.update(id, updateCommentDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id') id: string) {
    return this.commentService.remove(id);
  }
}
