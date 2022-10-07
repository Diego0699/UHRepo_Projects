import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductService } from '../../producto.service';

@Component({
  selector: 'app-producto-item3',
  templateUrl: './producto-item3.component.html',
  styleUrls: ['./producto-item3.component.css']
})
export class ProductoItem3Component implements OnInit {
  @Input()product3:Product;
  @Input()index:number;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productService.productSelected.emit(this.product3)
     
    
   }
}