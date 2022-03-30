import { ProductService } from 'src/app/shared/services/product.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  productForm!: FormGroup

  submitted: boolean = false;

  createdProduct: any;

  constructor(private router:Router, private formBuilder: FormBuilder, public productService:ProductService) {
    this.productForm = this.formBuilder.group({
             name: ['',[Validators.required]],
             price:['',[Validators.required]],
             description:['',[Validators.required, Validators.maxLength(40), Validators.minLength(10)]],
             stars:['', [Validators.required]],
             image:['',[Validators.required]]
    })
   }
   ngOnInit(): void {
    this.productForm.valueChanges.subscribe((changes)=>{
      console.log(changes)
      this.createdProduct = changes
      console.log('estos son ',this.createdProduct)
    })
  }

  onSubmit(){
    console.log(this.productForm);
    console.log(this.productForm.value);
    this.submitted = true;

    if (this.productForm.valid){
      const newProduct:any = {
        name: this.productForm.get('name')?.value,
        price: this.productForm.get('price')?.value,
        description: this.productForm.get('description')?.value,
        stars: this.productForm.get('stars')?.value,
        image: this.productForm.get('image')?.value
      }
      console.log('Este seria el nuevo producto: ',newProduct)
      this.createdProduct = newProduct;
      console.log(this.createdProduct);
      this.productService.postProduct(this.createdProduct).subscribe();
      this.router.navigate(["/products"])
    }



  }



}
