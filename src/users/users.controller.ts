import { Body, Controller, Get, Post, HttpException, HttpStatus, Param, NotFoundException, Put, Delete } from '@nestjs/common';

import { UsersService } from './users.service';
import { Users } from './schemas/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ){}

    @Get()
    async getAllUsers(): Promise<Users[]>{
        try{
            const users = await this.usersService.findAll();
            return users;
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Post()
    async createUser(
        @Body()
        user: CreateUserDto
    ): Promise<{ message: string; user?: Users }> {
        try {
            const newUser = await this.usersService.create(user);

            return { message: 'User created successfully', user: newUser };
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
                message: 'Invalid credentials'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get(':id')
    async getUser(
        @Param('id')
        id:  string
    ): Promise<Users> {
        try{
            const user = await this.usersService.findByID(id);
            
            if(!user)
                throw new NotFoundException('User not found');

            return user;
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
                message: 'Invalid credentials'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    async updateUser(
        @Param('id')
        id:  string,
        @Body()
        user: UpdateUserDto
    ): Promise<{ message: string; res?: Users }> {
        try{
            const res = await this.usersService.updateByID(id, user);
            
            if(!res)
                throw new NotFoundException('User not found');

            return { message: 'User details updated successfully', res };
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
                message: 'Invalid credentials'
            }, HttpStatus.BAD_REQUEST);
        }
    }


    @Delete(':id')
    async deleteUser(
        @Param('id')
        id:  string
    ): Promise<{ message: string; user?: Users }> {
        try{
            const user = await this.usersService.deleteByID(id);
            
            if(!user)
                throw new NotFoundException('User not found');

            return { message: 'User deleted successfully', user };
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
                message: 'Invalid credentials'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Put(':id')
    async updateAdmin(
        @Param('id')
        id:  string,
        @Body()
        user: UpdateAdminDto
    ): Promise< { message: string; user?: Users } > {
        try{
            const res = await this.usersService.updateByID(id, user);
            
            if(!res)
                throw new NotFoundException('User not found');

            return { message: 'Admin status updated successfully', user };
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
                message: 'Invalid credentials'
            }, HttpStatus.BAD_REQUEST);
        }
    }

    @Get('email/:email')
    async findByEmail(
        @Param('email') 
        email: string
    ): Promise< { message: string; user?: Users } > {
        try{
            const u = await this.usersService.findByEmail(email);
            if (!u) {
                throw new NotFoundException('User not found');
            }

            return { message: 'User found successfully', user: u };
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.BAD_REQUEST,
                error: error.message,
                message: 'Invalid credentials'
            }, HttpStatus.BAD_REQUEST);
        }
    }
}
