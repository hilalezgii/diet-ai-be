import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service'; // UserService'den kullanıcı verilerini alın
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService, // Kullanıcı doğrulama için gerekli
    private readonly jwtService: JwtService, // JWT işlemleri için gerekli
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user; // Şifreyi çıkarın
      return result; // Kullanıcı bilgilerini döndürün
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id }; // JWT payload
    return {
      access_token: this.jwtService.sign(payload), // JWT token oluşturma
    };
  }
}
