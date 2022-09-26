import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/posts/schema/post-schema';

import { User } from 'src/users/schema/user-schema';
import { IUser } from '../seed/interfaces/user-response.interface';
import { userDBFull } from './users';



@Injectable()
export class SeedService {

  //  private readonly axios: AxiosInstance=axios;

   constructor(

    @InjectModel( User.name )
    private readonly userModel: Model<User>,

    @InjectModel( Post.name )
    private readonly postModel: Model<Post>){}

    async populateDB(){
      await this.userModel.deleteMany({});
      await this.postModel.deleteMany({});

      const usersToInsert: IUser[] = []
      
      userDBFull.forEach(({ firstName, lastName, userName, email, password, image, birthdate, posteos, fullName, bio }) => {

      usersToInsert.push({ firstName, lastName, userName: userName.toLowerCase(), email: email.toLowerCase(), password, image, birthdate, posteos, fullName: fullName.toLowerCase(), bio })  
      });
    
   await this.userModel.insertMany(usersToInsert)
   
   return 'SEED executed'
}
}













    // const { data } = await this.axios.get<UserResponse>('http://localhost:3005/users');

      // const usersToInsert: {
      //    firstName: string;
      //    lastName:  string;
      //    userName:  string;
      //    email:     string;
      //    password:  string;
      //    image:     string;
      //    birthdate: string;
      // }[] = []

      // data.users.forEach(({ firstName, lastName, userName, email, password, image, birthdate }) => {

      // usersToInsert.push({ firstName, lastName, userName, email, password, image, birthdate })  
      // });