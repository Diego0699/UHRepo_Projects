import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductService } from '../../producto.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  @Input()product:Product;
  @Input()index:number;
  

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productService.productSelected.emit(this.product)
     
    
   }
}
