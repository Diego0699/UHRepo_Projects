import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductService } from '../../producto.service';

@Component({
  selector: 'app-producto-item7',
  templateUrl: './producto-item7.component.html',
  styleUrls: ['./producto-item7.component.css']
})
export class ProductoItem7Component implements OnInit {
  @Input()product7:Product;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productService.productSelected.emit(this.product7)
     
    
   }
}