import { userDetails } from "src/user/entities/user.entity";
import { AuthService } from "./auth.service";
import { AuthDto } from "../auth/dto/auth-dto";
import { authDetails } from "src/auth/entites/auth.entity";
export declare class AuthResolver {
    private authService;
    constructor(authService: AuthService);
    signUp(authDto: AuthDto): Promise<authDetails>;
    logIn(authDto: AuthDto): Promise<userDetails>;
}
