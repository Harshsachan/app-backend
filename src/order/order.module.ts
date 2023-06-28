import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { productDetails } from 'src/product/entities/product.entity';
import { OrderDetails } from './entities/order.entity';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetails,productDetails])],
  providers: [OrderResolver,OrderService]
})
export class OrderModule {}
