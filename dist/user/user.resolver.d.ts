import { CreateUserInput } from "./dto/create-user.input";
import { userDetails } from "./entities/user.entity";
import { UserService } from "./user.service";
export declare class UserResolver {
    private userService;
    constructor(userService: UserService);
    getUserDetailsByMail(email: string): Promise<userDetails>;
    createUser(createUserInput: CreateUserInput): Promise<userDetails>;
}