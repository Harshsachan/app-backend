import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from './product/product.module';
import { productDetails } from './product/entities/product.entity';
import { OrderModule } from './order/order.module';
import { OrderDetails } from './order/entities/order.entity';
import { UserModule } from './user/user.module';
import { userDetails } from './user/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { authDetails } from './auth/entites/auth.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RrModule } from './rating&review/rr.module';
import { RrDetails } from './rating&review/entities/createRR.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb+srv://harshitsachan:8400370072@sneaker.svqyffb.mongodb.net/?retryWrites=true&w=majority',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[productDetails,OrderDetails,userDetails,authDetails,RrDetails]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      //TODO
      //autoSchemaFile:true,
      playground:true,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),// code first
    }),
    ProductModule,
    OrderModule,
    UserModule,
    AuthModule,
    RrModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
