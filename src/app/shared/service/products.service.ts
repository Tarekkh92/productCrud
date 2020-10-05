import{Product} from "../models/Product.model";
import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent, SubscriptionLike, PartialObserver } from 'rxjs';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/do'


@Injectable()

export class productsService{
    constructor(private httpClient:HttpClient){}

    public getProductssAsync():Observable<Product[]>{
        return this.httpClient.get("http://localhost:3000/products")
        .do(products => console.log(products)) 
        .map((products:Product[])=>products);
        
    }
    public addProductAsync(product): Observable<Product[]>{

        return this.httpClient.post("http://localhost:3000/products",product).map((products:Product[])=>products);

    }
    public getOneBookAssync(id): Observable<Product[]>{

        return this.httpClient.get("http://localhost:3000/products/"+id).map((products:Product[])=>products);

    }
    public updateBookAssync(id,product):Observable<Product[]> {
       
        return this.httpClient.put("http://localhost:3000/products/"+id,product).map((products:Product[])=>products);
        
    }
    public deleteBookassync(id): Observable<Product[]>{

        return this.httpClient.delete("http://localhost:3000/products/"+id).map((products:Product[])=>products);

    }


}