import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-github2';
import { Injectable } from '@nestjs/common';

@Injectable()
export class GithubStrategy extends PassportStrategy(Strategy, 'github') {
  constructor() {
    super({
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/github/callback',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done,
  ): Promise<any> {
    const user = {
      id: profile.id,
      username: profile.username,
      email: profile.emails[0].value,
      displayName: profile.displayName,
      picture: profile.photos[0].value,
      accessToken,
    };
    done(null, user);
    // User.findOrCreate({ githubId: profile.id }, function (err, user) {
    //   return done(err, user);
    // });
  }
}
