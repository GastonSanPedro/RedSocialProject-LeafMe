import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Schema as MongooseSchema, Types, ObjectId } from 'mongoose';


@Schema()
export class Comment extends Document {

    @Prop()
    title?: string;

    @Prop()
    likes?: number;

    @Prop()
    description: string;

    @Prop({ type: MongooseSchema.Types.ObjectId, ref: 'User' }) 
    idUser: Types.ObjectId ; 

}

export const CommentSchema = SchemaFactory.createForClass(Comment)