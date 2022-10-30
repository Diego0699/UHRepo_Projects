import { Component, OnInit } from '@angular/core';
import { CarritoProducto } from '../shared/carrito.model';
import { CarritoCompraService } from './carrito.service';


@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productosCarrito:CarritoProducto[]
  constructor(private carritoService:CarritoCompraService) { }

  ngOnInit(): void {
    this.productosCarrito = this.carritoService.getCarritoProductos();
  }

}
