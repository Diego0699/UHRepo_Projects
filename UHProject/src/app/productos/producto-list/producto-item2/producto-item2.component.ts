import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductService } from '../../producto.service';

@Component({
  selector: 'app-producto-item2',
  templateUrl: './producto-item2.component.html',
  styleUrls: ['./producto-item2.component.css']
})
export class ProductoItem2Component implements OnInit {
  @Input()product2:Product;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productService.productSelected.emit(this.product2)
     
    
   }
}