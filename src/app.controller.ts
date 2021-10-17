import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() req){
    return {
      'message': 'Login url',
      'url': req.originalUrl,
    }
  }

  @Get('auth/github/callback')
  @UseGuards(AuthGuard('github'))
  githubAuthRedirect(@Req() req){
    return this.appService.githubLogin(req);
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
