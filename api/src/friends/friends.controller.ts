import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { AddFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Post()
  @ApiResponse({status: 201, description: 'The user has been successfully created.'})
  @ApiResponse({status: 400, description: 'Bad Request'})
  create(@Body() addFriendDto: AddFriendDto) {
    return this.friendsService.create(addFriendDto);
  }

  @Get(':idUser')
  findAllFriendsByUser(@Param('idUser') idUser: string) {
    return this.friendsService.findAllFriendsByUser(idUser);
  }

  @Get('/followers/:idUser')
  findAllFollowersByUser(@Param('idUser') idUser: string) {
    return this.friendsService.findAllFollowersByUser(idUser);
  }

  @Get('/followersAndFriends/:idUser/:term')
  findAllFollowersAndFriendsByUser(@Param('idUser') idUser: string, @Param('term') term: string) {
    return this.friendsService.findAllFollowersAndFriendsByUser(idUser, term);
  }


  @Get('/posts/:idUser')
  findAllPostsOfMyFriends(@Param('idUser') idUser:string) {
    return this.friendsService.findAllPostOfMyFriends(idUser);
  }


  @Delete('/:idUser/:idFriend')
  removeFriend(@Param('idUser') idUser: string, @Param('idFriend') idFriend: string) {
    console.log(idUser, idFriend, 'lalala')
    return this.friendsService.removeFriend(idUser, idFriend);
  }

  
}
