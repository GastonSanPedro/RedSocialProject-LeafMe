import { ApiProperty } from '@nestjs/swagger';
import {
  IsDate,
  IsNotEmpty,
  IsOptional,
  IsString
} from 'class-validator';
import { Types } from 'mongoose';

  
export class CreatePostDto {

    @ApiProperty({
        description: 'User picture',
        nullable: true
    })
    @IsString()
    @IsOptional()
    pics?: string;
    
    @ApiProperty()
    @IsDate()
    @IsOptional()
    createdAt?: number;

    @ApiProperty()
    @IsOptional()
    reported?: boolean;

    @ApiProperty({
    minLength: 1,
    })
    @IsString()
    @IsNotEmpty()
    description: string;
    
    @ApiProperty()
    @IsNotEmpty()
    author: Types.ObjectId
    
}
