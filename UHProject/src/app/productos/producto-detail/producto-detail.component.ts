import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarritoProducto } from 'src/app/shared/carrito.model';
import { CarritoCompraService } from 'src/app/carrito/carrito.service';
import { Product } from '../../shared/producto.model';
import { ProductoService } from '../producto.service';
import { ArrayType } from '@angular/compiler';

@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
  
  producto:Product;
  productosSeleccionados:Product[] =[];
  id:number;
  

  constructor(private productoService:ProductoService,
              private route: ActivatedRoute,
              private router:Router) { }
    
  ngOnInit(): void {//Se muestra el producto  con sus respectivos datos
    this.route.params.subscribe(
      (params:Params)=>{ 
        this.id = +params['id'];
        this.producto = this.productoService.getProduct(this.id) || this.productoService.getProduct2(this.id) || this.productoService.getProduct3(this.id)
        || this.productoService.getProduct4(this.id) || this.productoService.getProduct5(this.id) || this.productoService.getProduct6(this.id)
        || this.productoService.getProduct7(this.id);
      }
    )
  }
  onaddToCarrito(){
    this.productosSeleccionados.push(this.producto)
    console.log(this.productosSeleccionados)
  }

}
