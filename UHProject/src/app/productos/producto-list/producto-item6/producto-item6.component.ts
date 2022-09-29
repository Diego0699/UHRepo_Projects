import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductService } from '../../producto.service';

@Component({
  selector: 'app-producto-item6',
  templateUrl: './producto-item6.component.html',
  styleUrls: ['./producto-item6.component.css']
})
export class ProductoItem6Component implements OnInit {
  @Input()product6:Product;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productService.productSelected.emit(this.product6)
     
    
   }
}