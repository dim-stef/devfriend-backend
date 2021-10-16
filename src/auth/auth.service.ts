import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
    constructor(private usersService: UserService){}

    async validateUser(username: string, passw: string): Promise<any>{
        const user = await this.usersService.findOne(username);
        if(user && user.password === passw){
            const {password, ...result} = user;
            return result;
        }
        return null;
    }
}
