import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../producto.model';
import { ProductService } from '../producto.service';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
  producto:Product;
  id:number;
  ListSelected=''
  @Input()product:Product;
  @Input()product2:Product;
  @Input()index:number;

 
  

  constructor(private productService:ProductService,
              private route: ActivatedRoute,
              private router:Router) { }
    //Aca corregir bug de productos
  ngOnInit(): void {//Se muestra el producto  con sus respectivos datos
   
    
    this.route.params.subscribe(
      (params:Params)=>{ 
        this.id = +params['id'];
        this.producto = this.productService.getProduct(this.id) || this.productService.getProduct2(this.id) || this.productService.getProduct3(this.id)
        || this.productService.getProduct4(this.id) || this.productService.getProduct5(this.id) || this.productService.getProduct6(this.id)
        || this.productService.getProduct7(this.id);
        
      }
    )
  }

}
