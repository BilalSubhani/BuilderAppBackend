import { Transform } from 'class-transformer';
import { IsString, IsEmail, IsInt, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsString()
    readonly fname: string;

    @IsString()
    readonly lname: string;

    @IsEmail()
    readonly email: string;

    @IsString()
    readonly password: string;

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => value ?? 0)
    readonly isAdmin: number;
}
