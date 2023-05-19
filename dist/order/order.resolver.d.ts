import { CreateOrderInput } from "./dto/create-order.input";
import { OrderDetails } from "src/order/entities/order.entity";
import { OrderService } from "./order.service";
export declare class OrderResolver {
    private orderService;
    constructor(orderService: OrderService);
    findAllOrder(): Promise<OrderDetails[]>;
    findOrderById(id: number): Promise<OrderDetails>;
    createNewOrder(createOrderInput: CreateOrderInput): Promise<OrderDetails>;
}
