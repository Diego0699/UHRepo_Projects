import { EventEmitter } from "@angular/core";
import { ProductInicio } from "./inicio.model";


export class ProductInicioService{
     productSelected = new EventEmitter<ProductInicio>();

     // Lista Productos Ofertas
    private products:ProductInicio[]=[
        new ProductInicio(0,'GIGABYTE H610M H DDR4',
        75000,
        'https://extremetechcr.com/tienda/19093-large_default/gigabyte-h610m-h-ddr4.jpg'),
        new ProductInicio(1,'EVGA CLC 120',
        30000,
        'https://extremetechcr.com/tienda/14775-large_default/evga-clc-120.jpg'),
    ];

    // Lista Productos Nuevos
    private products2:ProductInicio[]=[
        new ProductInicio(25,'SEASONIC FOCUS GM-850 - 80 PLUS GOLD',
        92000,
        'https://extremetechcr.com/tienda/14467-large_default/seasonic-focus-gm-850-80-plus-gold.jpg'),

         new ProductInicio(3,'ADATA LEGEND 750 500GB',
         30000,
         'https://extremetechcr.com/tienda/18541-home_default/adata-legend-750-500gb.jpg'),
        
    ];
    constructor(){}
    getProducts(){
        return this.products.slice();
        
    }
    getProducts2(){
        return this.products2.slice();
        
    }
}