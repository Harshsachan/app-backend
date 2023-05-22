import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { authDetails } from './entites/auth.entity';
import { userDetails } from 'src/user/entities/user.entity';

@Module({
  imports:[TypeOrmModule.forFeature([authDetails,userDetails])],
  providers: [AuthResolver, AuthService]
})
export class AuthModule {}
