import { EventEmitter } from "@angular/core";
import { Product } from "./producto.model";

export class ProductService{
     productSelected = new EventEmitter<Product>();

     // Lista Productos Ofertas
    private products:Product[]=[
        new Product('Intel Core I5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];

    // Lista Productos Nuevos
    private products2:Product[]=[
        new Product('Ryzen 5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Asus MotherBoard',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];
    constructor(){}
    getProducts(){
        return this.products.slice(),this.products2.slice();
        
    }
}