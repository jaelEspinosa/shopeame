import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res:any)=>{
     console.log(res);
     this.products=res;
    })

  }

}
