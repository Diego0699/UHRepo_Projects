import { Injectable } from "@angular/core";
import { Product } from "../shared/producto.model";


@Injectable({
    providedIn:'root'
})
export class CarritoCompraService{
    
    private ProductosCarrito:Product[] =[
        new Product(0,'INTEL CORE I9 12900KF',
        480000,
        'https://extremetechcr.com/tienda/17711-large_default/intel-core-i9-12900kf.jpg'),
        new Product(1,'INTEL CORE I9 12900KF',
        480000,
        'https://extremetechcr.com/tienda/17711-large_default/intel-core-i9-12900kf.jpg')
    ]
    getCarritoProductos(){
        return this.ProductosCarrito.slice();
    }
   
}