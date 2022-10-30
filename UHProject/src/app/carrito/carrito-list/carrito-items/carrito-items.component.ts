import { Component, Input, OnInit } from '@angular/core';
import { CarritoProducto } from 'src/app/shared/carrito.model';
import { CarritoCompraService } from '../../carrito.service';


@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css']
})
export class CarritoItemsComponent implements OnInit {
  @Input()CarritoProductos:CarritoProducto;
  constructor(private carritoService:CarritoCompraService ) { }

  ngOnInit(): void {
 
  }

}
