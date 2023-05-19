import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrderDetails } from './entities/order.entity';
import { OrderResolver } from './order.resolver';
import { OrderService } from './order.service';

@Module({
  imports:[TypeOrmModule.forFeature([OrderDetails])],
  providers: [OrderResolver,OrderService]
})
export class OrderModule {}
