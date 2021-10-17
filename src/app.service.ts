import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {

  githubLogin(req){
    if(!req.user){
      return 'Invalid user'
    }

    return {
      message: 'User data',
      user: req.user,
    }
  }

  getHello(): string {
    return 'Hello World!';
  }
}
