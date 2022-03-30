import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get('http://localhost:3000/products');
  }

  postProduct(createdProduct:any){
    return this.http.post('http://localhost:3000/products',createdProduct)
  }

  /* putProduct(){
    return this.http.put('http://localhost:3000/products',)
  }  */

}
