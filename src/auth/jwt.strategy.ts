import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Header'dan token al
      ignoreExpiration: false, // Token'in süresi dolmuşsa hata döndür
      secretOrKey: 'secretKey', // Gizli anahtar
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email }; // Payload'dan kullanıcı bilgilerini döndür
  }
}
