import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarritoProducto } from 'src/app/shared/carrito.model';
import { CarritoCompraService } from '../../carrito.service';


@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css']
})
export class CarritoItemsComponent implements OnInit {
  @Input()CarritoProductos:CarritoProducto;
  @Output() emitePrecio = new EventEmitter<number>();

  CantidadArticulo:number=1;
  constructor(private carritoService:CarritoCompraService ) { 
  
  }
   
  ngOnInit(): void {
 
  }
  onSumar(){
    this.CantidadArticulo++;
  }
  onRestar(){
    if(this.CantidadArticulo > 1){
      this.CantidadArticulo--;
    }else{
      this.CantidadArticulo = 1;
    };    
  }
  
}
