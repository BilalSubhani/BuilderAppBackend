import { IsString, IsEmail, IsInt, IsOptional } from 'class-validator';

export class UpdateAdminDto {
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
    readonly isAdmin: number;
}
