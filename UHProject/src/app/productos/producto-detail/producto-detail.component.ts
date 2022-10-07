import { Component, OnInit } from '@angular/core';
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
  producto2:Product;
  id:number;
  id2:number;
 
  

  constructor(private productService:ProductService,
              private route: ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {//Se muestra el producto  con sus respectivos datos
    this.route.params.subscribe(
      (params:Params)=>{
        this.id = +params['id'];
        this.id2 = +params['id2'];
        this.producto = this.productService.getProduct(this.id);
        this.producto2 = this.productService.getProduct2(this.id2);
      }
    )
  }

}
