import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductService } from '../../producto.service';

@Component({
  selector: 'app-producto-item5',
  templateUrl: './producto-item5.component.html',
  styleUrls: ['./producto-item5.component.css']
})
export class ProductoItem5Component implements OnInit {
  @Input()product5:Product;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productService.productSelected.emit(this.product5)
     
    
   }
}