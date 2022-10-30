import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/producto.model';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto-item3',
  templateUrl: './producto-item3.component.html',
  styleUrls: ['./producto-item3.component.css']
})
export class ProductoItem3Component implements OnInit {
  @Input()product3:Product;

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productoService.productSelected.emit(this.product3)
     
    
   }
}