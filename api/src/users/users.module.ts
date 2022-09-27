import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from 'src/comments/schema/comment-schema';
import { Post, PostSchema } from 'src/posts/schema/post-schema';
import { User, UserSchema } from './schema/user-schema';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
    MongooseModule.forFeature([
      {
        name: Comment.name,
        schema: CommentSchema,
      },
      {
        name: Post.name,
        schema: PostSchema,
      },
      {
        name: User.name,
        schema: UserSchema,
      },
    ])
  ],
  exports:[
    MongooseModule
  ]
})
export class UsersModule {}
