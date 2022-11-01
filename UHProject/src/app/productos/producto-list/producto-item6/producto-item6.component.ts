import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../producto.model';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto-item6',
  templateUrl: './producto-item6.component.html',
  styleUrls: ['./producto-item6.component.css']
})
export class ProductoItem6Component implements OnInit {
  @Input()product6:Product;


  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productoService.productSelected.emit(this.product6)
     
    
   }
}