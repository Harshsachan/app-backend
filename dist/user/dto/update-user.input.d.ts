import { CreateUserInput } from './create-user.input';
declare const UpdateUserInput_base: import("@nestjs/common").Type<Partial<CreateUserInput>>;
export declare class UpdateUserInput extends UpdateUserInput_base {
    email: string;
    f_name: string;
    l_name: string;
    number: number;
    house_no: string;
    street: string;
    area: string;
    city: string;
    state: string;
    pincode: number;
}
export {};
