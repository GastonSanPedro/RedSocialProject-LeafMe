import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post
} from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger/dist';
import { ParseObjectIdPipe } from 'src/utilities/parse-object-id-pipe.pipe';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user-schema';
import { UsersService } from './users.service';
import { usersDB } from '../seed/users';
import { AddWallCommentDto } from './dto/add-wallcomment.dto';


@ApiTags('Users')
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiResponse({status: 201, description: 'The user has been successfully created.'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get('/deleted')
  findAllDeleted() {
    return this.usersService.findAllDeleted();
  }

  @Get(':term')
  findOne(@Param('term') term: string) {
    return this.usersService.findOne(term);
  }

  @Patch('/restoreUser/:id')
  restaured(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.restaured(id, updateUserDto);
  }
  @Get('/name/:term')
   findByName(@Param('term') term: string) {
  
    return this.usersService.findByName(term);
  }

  @Patch(':term')
  update(@Param('term') term: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(term, updateUserDto);
  }

  @Patch('/wall/:idUserWall')
  addCommentWall(@Param('idUserWall') idUserWall: string, @Body() wallCommentDto: AddWallCommentDto) {
    return this.usersService.addCommentWall(idUserWall, wallCommentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id)
  }

  // @Get('/restoreUser/:id')
  // findDeletedById(@Param('id') id: string) {
  //   return this.usersService.findDeletedById(id);
  // }

}
