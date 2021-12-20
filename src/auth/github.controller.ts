import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request, Response } from 'express';
import { GithubOauthGuard } from './github.guard';
import { JwtAuthService } from './jwt-auth.service';

@Controller('auth/github')
export class GithubOauthController {
  constructor(private jwtAuthService: JwtAuthService) {}

  @Get()
  @UseGuards(AuthGuard('github'))
  async githubAuth(@Req() _req) {
    // Guard redirects
  }

  @Get('callback')
  @UseGuards(GithubOauthGuard)
  async githubAuthRedirect(@Req() req: Request, @Res() res: Response) {
    const { accessToken } = this.jwtAuthService.login(req.user);
    res.cookie('jwt', accessToken);
    return {
        user: req.user
    }
  }
}