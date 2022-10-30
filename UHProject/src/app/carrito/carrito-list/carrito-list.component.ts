import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/producto.model';
import { CarritoCompraService } from '../carrito.service';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css']
})
export class CarritoListComponent implements OnInit {
  @Input()ProductoCarrito:Product;
  CarritoProductos:Product[];
  constructor(private carritoService:CarritoCompraService) { }

  ngOnInit(): void {
    this.CarritoProductos = this.carritoService.getCarritoProductos();
  }

}
