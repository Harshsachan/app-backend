import { Args, Mutation, Resolver, Query, Int } from "@nestjs/graphql";
import { CreateOrderInput } from "./dto/create-order.input";
import { OrderDetails } from "src/order/entities/order.entity";
import { OrderService } from "./order.service";

@Resolver(of=>OrderDetails)
export class OrderResolver{
    constructor(private orderService:OrderService){}

    // @Query(returns=>[OrderDetails])
    // findAllOrder():Promise<OrderDetails[]>{
    //     return this.orderService.findAllOrder();
    // }

    // @Query(returns=>OrderDetails)
    // findOrderById(@Args('id',{type:()=>Int}) id:number):Promise<OrderDetails>{
    //   return this.orderService.findOrderById(id);
    // }

    @Query(returns=>[OrderDetails])
    findOrderByUserMail(@Args('user_email') user_email:string):Promise<OrderDetails[]>{
      return this.orderService.findOrderByUserMail(user_email);
    }

    @Mutation(returns=>OrderDetails)
    createNewOrder(@Args('createOrderInput') createOrderInput:CreateOrderInput):Promise<OrderDetails>{
      return this.orderService.createNewOrder(createOrderInput);
    }

}