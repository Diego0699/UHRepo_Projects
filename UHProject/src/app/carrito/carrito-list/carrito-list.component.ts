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
  Subtotalf:number;
  IVAf: number;
  Totalf:number;
  CarritoProductos:Product[];
  constructor(private carritoService:CarritoCompraService) { 
   
  }
  @ViewChild(CarritoItemsComponent) child;
 

  ngOnInit(): void {
    this.CarritoProductos = this.carritoService.getCarritoProductos();
    this.Subtotalf=0;
    this.IVAf=0;
    this.Totalf=0;
    this.SumaTotal();
  
  }
  datosDetalle(lista:[]){
    console.log(lista);
  }
   SumaTotal() {
    const Totalf =  this.CarritoProductos.map(({price}) => price).reduce((value1, value2) => value1 + value2, 0);
    return Totalf;
  }
  
}
