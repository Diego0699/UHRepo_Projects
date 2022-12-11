import { AuthService } from './../../sesion/auth.service';
import { Component, EventEmitter, Input , OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CarritoProducto } from 'src/app/shared/carrito.model';
import { CarritoCompraService } from 'src/app/carrito/carrito.service';
import { Product } from '../producto.model';
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

  detailActivado:boolean =false;

  constructor(private productoService:ProductoService,
              private route: ActivatedRoute) { }
    
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
    this.detailActivado = true;
    setTimeout(() => {
      this.detailActivado = false;
    }, 2000);
    
   

    this.productosSeleccionados.push(this.producto);
    this.productoService.addProductoToCarrito(this.productosSeleccionados);
    console.log(this.productosSeleccionados);
   
  }

}
