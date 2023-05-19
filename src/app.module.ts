import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ProductModule } from './product/product.module';
import { productDetails } from './product/entities/product.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type:'mongodb',
      url:'mongodb+srv://harshitsachan:8400370072@sneaker.svqyffb.mongodb.net/?retryWrites=true&w=majority',
      synchronize:true,
      useUnifiedTopology:true,
      entities:[productDetails]
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),// code first
    }),
    ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
