
import { Args, Mutation, Resolver,Query, Float } from "@nestjs/graphql";
import { CreateRating } from "./dto/createRR.input";
import { RrDetails } from "./entities/createRR.entity";
import { RrService } from "./rr.service";

@Resolver(of=>RrDetails)
export class RrResolver{
    constructor (private rrService:RrService){}
    
    @Mutation(returns=>RrDetails)
    createRatingAndReview(@Args('createRating')createRating:CreateRating):Promise<RrDetails>{
        return this.rrService.createRatingAndReview(createRating);
    }
    
    @Query(returns => [RrDetails])
    findReviewsAndRatingsByProductId(@Args('product_id') product_id: number): Promise<RrDetails[]> {
        return this.rrService.findReviewsAndRatingsByProductId(product_id);
    }
    @Query(returns=>Float)
    findAvgByProductId(@Args('product_id')product_id:number):Promise<number>
    {
        return this.rrService.getAverageRatingByProductId(product_id);
    }
}