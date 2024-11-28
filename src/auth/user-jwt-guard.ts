import {
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Observable } from 'rxjs';

@Injectable()
export class UserJwtGuard extends AuthGuard('jwt') {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    return super.canActivate(context);
  }
  handleRequest<TUser = any>(err: any, user: any): TUser {
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    console.log(user);
    if (user.userName) { // esta parte define para autorizar sesion revisar jwt-strategy.ts
      return user;
    }
    throw err || new UnauthorizedException();
  }
}
