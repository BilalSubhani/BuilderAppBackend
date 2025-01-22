import { Transform } from 'class-transformer';
import { IsString, IsEmail, IsInt, IsOptional } from 'class-validator';

export class UpdateUserDto {
    @IsString()
    @IsOptional()
    readonly fname: string;

    @IsString()
    @IsOptional()
    readonly lname: string;

    @IsEmail()
    @IsOptional()
    readonly email: string;

    @IsString()
    @IsOptional()
    readonly password: string;

    @IsInt()
    @IsOptional()
    @Transform(({ value }) => value ?? 0)
    readonly isAdmin: number;
}
