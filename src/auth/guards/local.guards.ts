import { Injectable, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class LocalGuard extends AuthGuard('local') {
    handleRequest(err, user, context: ExecutionContext) {
        if (err || !user) {
            throw err || new UnauthorizedException('Invalid credentials');
        }
        return user;
    }
}
