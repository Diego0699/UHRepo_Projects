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
  constructor(private carritoService:CarritoCompraService) { 
   
  

  }

  ngOnInit(): void {
    let ProductosLimpio = Array.from(new Set(this.productosCarrito));
    this.productosCarrito = this.carritoService.getCarritoProductos();
    
  }

}



