import { Component, Input, OnInit, ViewChild } from '@angular/core';

import { Product } from 'src/app/productos/producto.model';
import { CarritoCompraService } from '../carrito.service';
import { CarritoItemsComponent } from './carrito-items/carrito-items.component';

@Component({
  selector: 'app-carrito-list',
  templateUrl: './carrito-list.component.html',
  styleUrls: ['./carrito-list.component.css']
})
export class CarritoListComponent implements OnInit {
  @Input()ProductoCarrito:Product;
  
  CarritoProductos:Product[];
  constructor(private carritoService:CarritoCompraService) { }
  @ViewChild(CarritoItemsComponent) child;
 

  ngOnInit(): void {
    this.CarritoProductos = this.carritoService.getCarritoProductos();
    Total(2000)
  }

  
}

// todo: Investigate about how to sum products prices and display on another component

function Total(price: number){
  console.log(`Total: ${price}`);

}
