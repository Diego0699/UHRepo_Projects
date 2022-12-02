import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../productos/producto.model";


@Injectable({
    providedIn:'root'
})
export class CarritoCompraService{
    productosCambio = new EventEmitter<Product[]>();
    TotalPrice:number;


    Subtotal:number;
    IVA: number;
    Total:number;
    private ProductosCarrito:Product[] =[]

    constructor(){
      this.Subtotal=0;
      this.IVA=0;
      this.Total=0;
    }


    getCarritoProductos(){
        return this.ProductosCarrito.slice();
    }
   
   addProductos(productoSeleccionados:Product[]){
      this.ProductosCarrito.push(...productoSeleccionados);
      this.productosCambio.emit(this.ProductosCarrito.slice());
   }

   sumaTotal(){
   
   }

   //!pendiente resolver
  deleteCarritoProducto(index:number){
    this.ProductosCarrito.splice(index,1);
    this.productosCambio.next(this.ProductosCarrito.slice())
  }
   
  
}