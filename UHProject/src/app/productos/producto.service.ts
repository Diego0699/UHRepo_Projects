import { EventEmitter } from "@angular/core";
import { Product } from "./producto.model";

export class ProductService{
     productSelected = new EventEmitter<Product>();

     // Lista Placas Madre
    private products:Product[]=[
        new Product('Intel Core I5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];

    // Lista Procesadores
    private products2:Product[]=[
        new Product('INTEL CORE I3 10105F',
        '¢ 59,000',
        'https://extremetechcr.com/tienda/15017-home_default/intel-core-i3-10105f.jpg'),

         new Product('AMD RYZEN 3 3200G',
         '¢ 85,000',
         'https://extremetechcr.com/tienda/20824-home_default/amd-ryzen-3-3200g.jpg'),
         new Product('INTEL CORE I5 10400F',
         '¢ 105,000',
         'https://extremetechcr.com/tienda/11650-home_default/intel-core-i5-10400f.jpg'),
 
          new Product('INTEL CORE I7 12700',
          '¢ 295,000',
          'https://extremetechcr.com/tienda/19090-home_default/intel-core-i7-12700f.jpg'),
          new Product('AMD RYZEN 9 5900X',
          '¢ 290,000',
          'https://extremetechcr.com/tienda/12202-home_default/amd-ryzen-9-5900x.jpg')
    ];
     // Lista Placas Ram
    private products3:Product[]=[
        new Product('Ryzen 5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Asus MotherBoard',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];
     // Lista Almacenamiento
    private products4:Product[]=[
        new Product('Ryzen 5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Asus MotherBoard',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];
     // Lista Enfriamiento
    private products5:Product[]=[
        new Product('Ryzen 5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Asus MotherBoard',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];
     // Lista Fuentes de poder
    private products6:Product[]=[
        new Product('Ryzen 5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Asus MotherBoard',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];
    private products7:Product[]=[
        new Product('Ryzen 5',
        '250,000',
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Asus MotherBoard',
         '420,000',
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png')
    ];
    constructor(){}
    getProducts(){
        return this.products.slice();
        
    }
    getProducts2(){
        return this.products2.slice();
        
    }
    getProducts3(){
        return this.products3.slice();
        
    }
    getProducts4(){
        return this.products4.slice();
        
    }
    getProducts5(){
        return this.products5.slice();
        
    }
    getProducts6(){
        return this.products6.slice();
        
    }
    getProducts7(){
        return this.products7.slice();
        
    }
}