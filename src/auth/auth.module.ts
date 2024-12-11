import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UserModule } from '../user/user.module'; // UserService'yi import edin
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    UserModule, // Kullanıcı doğrulama için gerekli
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: 'secretKey', // Gizli anahtarınızı burada belirtin (çevresel değişken kullanmanız önerilir)
      signOptions: { expiresIn: '1h' }, // Token geçerlilik süresi
    }),
  ],
  providers: [AuthService, JwtStrategy], // JwtStrategy'yi ekleyin
  controllers: [AuthController],
})
export class AuthModule {}
