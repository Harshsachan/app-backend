import { Repository } from "typeorm";
import { CreateUserInput } from "./dto/create-user.input";
import { userDetails } from "./entities/user.entity";
export declare class UserService {
    private userDetailsRepositry;
    constructor(userDetailsRepositry: Repository<userDetails>);
    getUserDetailsByMail(email: string): Promise<userDetails | null>;
    createUser(createUserInput: CreateUserInput): Promise<userDetails>;
}
