import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderInput } from "src/order/dto/create-order.input";
import { OrderDetails } from "./entities/order.entity";

@Injectable()
export class OrderService{
 constructor(@InjectRepository(OrderDetails) private orderDetailsRepositry:Repository<OrderDetails>) {}

      // createNewOrder(createOrderInput:CreateOrderInput):Promise<OrderDetails>{
      //     const newOrder = this.orderDetailsRepositry.create(createOrderInput)

      //     return this.orderDetailsRepositry.save(newOrder);
      // }
      async createNewOrder(createOrderInput:CreateOrderInput):Promise<void>{
        try {
          const newOrder = this.orderDetailsRepositry.create(createOrderInput)
          await this.orderDetailsRepositry.save(newOrder);

        } catch (error) {
          throw new Error("HA HA")
        }
        
        
        

        
    }

      // async createNewOrder(createOrderInput: CreateOrderInput): Promise<OrderDetails> {
      //   const { user_email, product_ids } = createOrderInput;
      
      //   const newOrders = product_ids.map(productId =>
      //     this.orderDetailsRepositry.create({
      //       user_email,
      //       product_id: productId,
      //     }),
      //   );
      
      //   const savedOrders = await this.orderDetailsRepositry.save(newOrders);
      //   return savedOrders[0];
      // }

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