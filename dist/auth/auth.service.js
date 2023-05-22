"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const argon2 = require("argon2");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const auth_entity_1 = require("./entites/auth.entity");
const user_entity_1 = require("../user/entities/user.entity");
let AuthService = class AuthService {
    constructor(authDetailsRepositry, userDetailsRepository) {
        this.authDetailsRepositry = authDetailsRepositry;
        this.userDetailsRepository = userDetailsRepository;
    }
    async signUp(authDto) {
        const { email, password } = authDto;
        const userCheck = await this.authDetailsRepositry.findOne({ where: { email } });
        if (userCheck) {
            throw new common_1.HttpException("User with this email already exists ", common_1.HttpStatus.FORBIDDEN);
        }
        const hashedPassword = await argon2.hash(password);
        const newUserLogin = this.authDetailsRepositry.create({
            email,
            password: hashedPassword,
        });
        return this.authDetailsRepositry.save(newUserLogin);
    }
    async logIn(authDto) {
        const { email, password } = authDto;
        const user = await this.authDetailsRepositry.findOne({ where: { email } });
        if (!user) {
            throw new common_1.NotFoundException('This Email is not registered with  us');
        }
        const isPasswordValid = await argon2.verify((await user).password, password);
        if (!isPasswordValid) {
            throw new common_1.UnauthorizedException('Incorrect Password');
        }
        return this.userDetailsRepository.findOneOrFail({ where: { email } });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(auth_entity_1.authDetails)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.userDetails)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map