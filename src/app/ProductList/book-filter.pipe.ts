import { PipeTransform, Pipe } from "@angular/core";
import { Product } from "../shared/models/Product.model";

@Pipe({
    name:'bookFilter'
})

export class bookFilterPipe implements PipeTransform{
    transform(books:Product[],searchTerm:string):Product[]{
        if(!books || !searchTerm){
            return books;
        }
        return books.filter(product=>product.productDescription.toLowerCase().indexOf(searchTerm.toLowerCase())!==-1 )
    }
    
}