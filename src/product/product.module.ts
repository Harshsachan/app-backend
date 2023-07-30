import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RrDetails } from '../rating&review/entities/createRR.entity';

import { RrModule } from '../rating&review/rr.module';

import { productDetails } from './entities/product.entity';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';


@Module({
  imports:[RrModule,TypeOrmModule.forFeature([productDetails,RrDetails])],
  providers: [ProductResolver,ProductService]
})
export class ProductModule {}
