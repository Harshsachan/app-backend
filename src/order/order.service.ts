import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderInput } from "src/order/dto/create-order.input";
import { OrderDetails } from "./entities/order.entity";

@Injectable()
export class OrderService{
 constructor(@InjectRepository(OrderDetails) private orderDetailsRepositry:Repository<OrderDetails>) {}

      createNewOrder(createOrderInput:CreateOrderInput):Promise<OrderDetails>{
          const newOrder = this.orderDetailsRepositry.create(createOrderInput)

          return this.orderDetailsRepositry.save(newOrder);
      }

      findOrderByUserMail(user_email:string):Promise<OrderDetails[]>{
        return this.orderDetailsRepositry.find({where:{user_email}})
      }

      // async findOrderById(id:number):Promise<OrderDetails>{
      //   return this.orderDetailsRepositry.findOneOrFail({where:{id}});
      // }

      // async findAllOrder():Promise<OrderDetails[]>{
      //   return this.orderDetailsRepositry.find();
      // }
}