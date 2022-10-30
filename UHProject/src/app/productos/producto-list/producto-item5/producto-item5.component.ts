import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/producto.model';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto-item5',
  templateUrl: './producto-item5.component.html',
  styleUrls: ['./producto-item5.component.css']
})
export class ProductoItem5Component implements OnInit {
  @Input()product5:Product;
  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productoService.productSelected.emit(this.product5)
     
    
   }
}