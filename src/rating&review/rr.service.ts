import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateRating } from "./dto/createRR.input";
import { RrDetails } from "./entities/createRR.entity";

@Injectable()
export class RrService{
    constructor(@InjectRepository(RrDetails)private rrDetailsRepositry:Repository<RrDetails>){}
    
    async createRatingAndReview(createRating:CreateRating):Promise<RrDetails>{
        const existingRrDetails= await this.rrDetailsRepositry.findOne({
            where:{customer_email:createRating.customer_email,product_ids:createRating.product_ids}
        });
        if(existingRrDetails){
            existingRrDetails.rating=createRating.rating;
            existingRrDetails.review=createRating.review;
            
            return this.rrDetailsRepositry.save(existingRrDetails);
        }
        const newRate = await this.rrDetailsRepositry.create(createRating)
        return this.rrDetailsRepositry.save(newRate);
    }
    
    async findReviewsAndRatingsByProductId(product_id: number): Promise<RrDetails[]> {
        return this.rrDetailsRepositry.find({ where: { product_ids: product_id } });
      }

      async getAverageRatingByProductId(productId: number): Promise<number> {
        const ratings = await this.rrDetailsRepositry.find({ where: { product_ids: productId } });
    
        if (ratings.length === 0) {
          return 0;
        }
    
        const sum = ratings.reduce((total, rating) => total + rating.rating, 0);
        const average = sum / ratings.length;
    
        return parseFloat(average.toFixed(2));
      }
}