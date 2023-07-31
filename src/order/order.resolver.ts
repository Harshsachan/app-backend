import { Args, Mutation, Resolver, Query, Int } from "@nestjs/graphql";
import { CreateOrderInput } from "./dto/create-order.input";
import { OrderDetails } from "src/order/entities/order.entity";
import { OrderService } from "./order.service";

@Resolver(of=>OrderDetails)
export class OrderResolver{
    constructor(private orderService:OrderService){}

    
    // @Mutation(returns=>String)
    // async createNewOrder(@Args('createOrderInput') createOrderInput:CreateOrderInput):Promise<string>{
    //   try{
    //      await this.orderService.createNewOrder(createOrderInput);
    //      return("Order Placed");
    //    }
    //    catch(e){
    //      throw new Error("HA HA");
    //    }
    // }
    @Mutation(returns => String)
async createNewOrder(@Args('createOrderInput') createOrderInput: CreateOrderInput): Promise<string> {
  try {
    const { products, ...rest } = createOrderInput;
    await Promise.all(
      products.map(async product => {
        const orderInput = { ...rest, products: [product] };
        await this.orderService.createNewOrder(orderInput);
      })
    );

    return "Orders Placed";
  } catch (e) {
    throw new Error("Failed to place orders");
  }
}


    


    @Query(returns=>[OrderDetails])
    findOrderByUserMail(@Args('customer_email') customer_email:string):Promise<OrderDetails[]>{
      return this.orderService.findOrderByUserMail(customer_email);
    }

}