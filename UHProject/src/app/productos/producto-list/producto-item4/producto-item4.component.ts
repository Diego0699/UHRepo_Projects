import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../../../shared/producto.model';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto-item4',
  templateUrl: './producto-item4.component.html',
  styleUrls: ['./producto-item4.component.css']
})
export class ProductoItem4Component implements OnInit {
  @Input()product4:Product;


  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.productoService.productSelected.emit(this.product4)
     
    
   }
}