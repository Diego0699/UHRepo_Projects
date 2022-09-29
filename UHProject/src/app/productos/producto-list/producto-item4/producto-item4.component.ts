import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductService } from '../../producto.service';

@Component({
  selector: 'app-producto-item4',
  templateUrl: './producto-item4.component.html',
  styleUrls: ['./producto-item4.component.css']
})
export class ProductoItem4Component implements OnInit {
  @Input()product4:Product;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productService.productSelected.emit(this.product4)
     
    
   }
}