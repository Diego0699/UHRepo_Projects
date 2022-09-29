import { EventEmitter } from "@angular/core";
import { ProductInicio } from "./inicio.model";


export class ProductInicioService{
     productSelected = new EventEmitter<ProductInicio>();

     // Lista Productos Ofertas
    private products:ProductInicio[]=[
        new ProductInicio('Intel Core I5',
        '¢ 250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new ProductInicio('Intel Core I9',
         '¢ 420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];

    // Lista Productos Nuevos
    private products2:ProductInicio[]=[
        new ProductInicio('Ryzen 5',
        '¢ 250,000',
        'https://igamingcr.com/wp-content/uploads/2022/02/100-100000252BOX.jpg'),

         new ProductInicio('Asus MotherBoard',
         '¢ 420,000',
         'https://www.asus.com/media/Odin/websites/global/ProductLine/20200819054034.png')
    ];
    constructor(){}
    getProducts(){
        return this.products.slice();
        
    }
    getProducts2(){
        return this.products2.slice();
        
    }
}