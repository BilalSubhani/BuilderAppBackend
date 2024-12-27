import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Users } from './schemas/users.schema';
import mongoose from 'mongoose';

@Injectable()
export class UsersService {

    constructor(
        @InjectModel(Users.name)
        private userModel: mongoose.Model<Users>
    ){}
    
    async findAll(): Promise<Users[]> {
        const allUsers = await this.userModel.find();
        return allUsers;
    }
    async create(user: Users): Promise<Users>{
        const res = await this.userModel.create(user);
        return res;
    }
    async findByID(id: string): Promise<Users>{
        const res = await this.userModel.findById(id);
        if(!res)
            throw new NotFoundException('User not found');

        return res;
    }

    async updateByID(id: string, user: Users): Promise<Users>{
        const res = await this.userModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true
        });

        return res;
    }

    async deleteByID(id: string): Promise<Users>{
        const res = await this.userModel.findByIdAndDelete(id);

        return res;
    }
    
    async updateAdminByID(id: string, user: Users): Promise<Users>{
        const res = await this.userModel.findByIdAndUpdate(id, user, {
            new: true,
            runValidators: true
        });

        return res;
    }
}
