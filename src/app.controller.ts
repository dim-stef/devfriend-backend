import { Controller, Get, Req, UseGuards, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  private readonly logger = new Logger(AppController.name);

  @Get('github')
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() req){
    this.logger.log('Doing something...');

    return {
      'message': 'Login url',
      'url': req.originalUrl,
    }
  }

  // @Get('auth/github/callback')
  // @UseGuards(AuthGuard('github'))
  // githubAuthRedirect(@Req() req){
  //   this.logger.log('Doing something...');

  //   return this.appService.githubLogin(req);
  // }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
