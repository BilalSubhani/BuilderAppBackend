import { Injectable, NotFoundException } from '@nestjs/common';
import { AuthPayloadDTO } from './dto/auth.dto';
import { JwtService } from '@nestjs/jwt';
import { Users } from '../users/schemas/users.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class AuthService {

    constructor(
        private jwtService: JwtService,

        @InjectModel(Users.name)
        private userModel: mongoose.Model<Users>
    ){}

    async validateUser( { email, password } : AuthPayloadDTO ){
        const findUser = await this.userModel.findOne( {email} );
        if(!findUser) 
            throw new NotFoundException('User not found');
        if(password == findUser.password){
            const { password, ...user } = findUser;

            return this.jwtService.sign(user);
        }
    }
}
