import { Repository } from "typeorm";
import { AuthDto } from "src/auth/dto/auth-dto";
import { authDetails } from "src/auth/entites/auth.entity";
import { userDetails } from "src/user/entities/user.entity";
export declare class AuthService {
    private authDetailsRepositry;
    private userDetailsRepository;
    constructor(authDetailsRepositry: Repository<authDetails>, userDetailsRepository: Repository<userDetails>);
    signUp(authDto: AuthDto): Promise<authDetails>;
    logIn(authDto: AuthDto): Promise<userDetails>;
}
