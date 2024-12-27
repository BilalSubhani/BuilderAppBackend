import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class Users{

    @Prop({ required: true })
    fname: string;

    @Prop({ required: true })
    lname: string;

    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

    @Prop({ default: 0 })
    isAdmin: number;
}
export const UserSchema = SchemaFactory.createForClass(Users);