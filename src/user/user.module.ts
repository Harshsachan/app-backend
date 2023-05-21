import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { userDetails } from './entities/user.entity';
import { UserResolver } from './user.resolver';
import { UserService } from './user.service';

@Module({
  imports:[TypeOrmModule.forFeature([userDetails])],
  providers: [UserResolver,UserService]
})
export class UserModule {}
