import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../productos/producto.model";


@Injectable({
    providedIn:'root'
})
export class CarritoCompraService{
    productosCambio = new EventEmitter<Product[]>();
    TotalPrice:number;

    private ProductosCarrito:Product[] =[]

    getCarritoProductos(){
        return this.ProductosCarrito.slice();
    }
   
   addProductos(productoSeleccionados:Product[]){
      this.ProductosCarrito.push(...productoSeleccionados);
      this.productosCambio.emit(this.ProductosCarrito.slice());
   }

   sumaTotal(){
    for (let x of this.ProductosCarrito){
        
    } 
   }
  deleteCarritoProducto(index:number){
    this.ProductosCarrito.splice(index,1);
    this.productosCambio.next(this.ProductosCarrito.slice())
  }
   
  
}