import { EventEmitter, Injectable } from "@angular/core";
import { Product } from "../productos/producto.model";


@Injectable({
    providedIn:'root'
})
export class CarritoCompraService{
    productosCambio = new EventEmitter<Product[]>();
    Cantidad:number;
    private ProductosCarrito:Product[] =[
        // new Product(0,'INTEL CORE I9 12900KF',
        // 480000,
        // 'https://extremetechcr.com/tienda/17711-large_default/intel-core-i9-12900kf.jpg'),
        // new Product(1,'INTEL CORE I9 12900KF',
        // 480000,
        // 'https://extremetechcr.com/tienda/17711-large_default/intel-core-i9-12900kf.jpg')
    ]
    getCarritoProductos(){
        return this.ProductosCarrito.slice();
    }
    // addProducto(productoSeleccionados:Product){
    //     this.ProductosCarrito.push(productoSeleccionados);
    //     this.porductosCambio.emit(this.ProductosCarrito.slice())
    // }
   
   addProductos(productoSeleccionados:Product[]){
      this.ProductosCarrito.push(...productoSeleccionados);
      this.productosCambio.emit(this.ProductosCarrito.slice());
   }

  
}