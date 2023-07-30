import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { RrDetails } from "./entities/createRR.entity";
import { RrResolver } from "./rr.resolver";
import { RrService } from "./rr.service";

@Module({
    imports:[TypeOrmModule.forFeature([RrDetails])],
    providers:[RrResolver,RrService],
    exports:[RrService]
})
export class RrModule{}