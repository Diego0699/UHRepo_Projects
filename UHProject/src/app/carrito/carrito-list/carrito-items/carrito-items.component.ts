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
  public carritoProductosLista:CarritoProducto[];
  constructor(private carritoService:CarritoCompraService ) { 
  this.carritoProductosLista=[];
  }
   
  ngOnInit(): void {
    this.carritoProductosLista.push(this.CarritoProductos);
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
   onDelete(index:number){
    if(index == this.CarritoProductos.id ){
      console.log(index);
      console.log(this.CarritoProductos.id);
      console.log(this.CarritoProductos)
      this.carritoProductosLista.splice(index,1)
      this.carritoService.deleteCarritoProducto(index);
    }
   }
}
