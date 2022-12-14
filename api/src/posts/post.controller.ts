import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger/dist';
import { ApiResponse } from '@nestjs/swagger/dist/decorators/api-response.decorator';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id-pipe.pipe';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PostsService } from './post.service';

@ApiTags('Posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  @ApiResponse({status: 201, description: 'The record has been successfully created.'})
  create(@Body() createPostDto: CreatePostDto) {
    return this.postsService.create(createPostDto);
  }
  
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get('/trending')
  findByRating() {
    return this.postsService.findByRating();
  }
  
  @Get('/:term')
  findByDescription(@Param('term') term: string) {
    return this.postsService.findByDescription(term);
  }

  @Get('/id/:idPost')
    findById(@Param('idPost') idPost: string){
      return this.postsService.findById(idPost)
  }

  @Patch('/:id')
  update(@Param('id') id:string , @Body()updatePostDto: UpdatePostDto) {
    return this.postsService.update( id, updatePostDto );
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return this.postsService.remove(id);
  }
}
