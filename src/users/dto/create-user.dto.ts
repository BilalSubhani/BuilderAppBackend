export class CreateUserDto{
    readonly fname: string;
    readonly lname: string;
    readonly email: string;
    readonly password: string;
    readonly isAdmin: number;
}