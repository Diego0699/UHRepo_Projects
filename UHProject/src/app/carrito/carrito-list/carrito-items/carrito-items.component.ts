import { Component, EventEmitter, Input, OnInit } from '@angular/core';
import { CarritoProducto } from 'src/app/shared/carrito.model';
import { CarritoCompraService } from '../../carrito.service';


@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css']
})
export class CarritoItemsComponent implements OnInit {
  @Input()CarritoProductos:CarritoProducto;

  Cantidad:number = 1;
  
  constructor(private carritoService:CarritoCompraService ) { }

  ngOnInit(): void {
 
  }
  onSumador(){
    this.carritoService
    this.Cantidad ++;
    console.log(this.Cantidad)
   
  }
}
