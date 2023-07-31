import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateOrderInput } from "src/order/dto/create-order.input";
import { OrderDetails } from "./entities/order.entity";

@Injectable()
export class OrderService{
 constructor(@InjectRepository(OrderDetails) private orderDetailsRepositry:Repository<OrderDetails>) {}


    //   async createNewOrder(createOrderInput:CreateOrderInput):Promise<void>{
    //     try {
    //       const newOrder = this.orderDetailsRepositry.create(createOrderInput)
    //       await this.orderDetailsRepositry.save(newOrder);

    //     } catch (error) {
    //       throw new Error("HA HA")
    //     }
    // }

    async createNewOrder(createOrderInput: CreateOrderInput): Promise<void> {
      try {
        const { products, ...rest } = createOrderInput;
        await Promise.all(
          products.map(async (product) => {
            const newOrder = this.orderDetailsRepositry.create({
              ...rest,
              products: [product], // Here, we create an array with a single product
          
            });
            await this.orderDetailsRepositry.save(newOrder);
          }),
        );
      } catch (error) {
        throw new Error('Failed to create orders');
      }
    }
    
    
    
    

      findOrderByUserMail(customer_email:string):Promise<OrderDetails[]>{
        return this.orderDetailsRepositry.find({where:{customer_email}})
      }

      // async findOrderById(id:number):Promise<OrderDetails>{
      //   return this.orderDetailsRepositry.findOneOrFail({where:{id}});
      // }

      // async findAllOrder():Promise<OrderDetails[]>{
      //   return this.orderDetailsRepositry.find();
      // }
}