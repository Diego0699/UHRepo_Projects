import { EventEmitter } from "@angular/core";
import { Product } from "./producto.model";

export class ProductService{
     productSelected = new EventEmitter<Product>();

     // Lista Placas Madre
    private products:Product[]=[
        new Product('Intel Core I5',
        750000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];

    // Lista Procesadores
    private products2:Product[]=[
        new Product('Intel Core I5',
        300000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];
     // Lista Placas Ram
    private products3:Product[]=[
        new Product('Intel Core I5',
        250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];
     // Lista Almacenamiento
    private products4:Product[]=[
        new Product('Intel Core I5',
        250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];
     // Lista Enfriamiento
    private products5:Product[]=[
        new Product('Intel Core I5',
        250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];
     // Lista Fuentes de poder
    private products6:Product[]=[
        new Product('Intel Core I5',
        250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];
    private products7:Product[]=[
        new Product('Intel Core I5',
        450000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg'),

         new Product('Intel Core I9',
         250000,
         'https://www.intel.la/content/dam/www/central-libraries/us/en/images/alder-lake-i9-no12-original.png.rendition.intel.web.864.486.png'),
         new Product('Intel Core I5',
         250000,
        'https://http2.mlstatic.com/D_NQ_NP_665166-MCR48871458342_012022-V.jpg')
    
    ];
    constructor(){}
    
    getProducts(){
        return this.products.slice();
        
    }
    getProduct(index2:number){
        return this.products[index2]
    }




    getProducts2(){
        return this.products2.slice();
        
    }
    getProduct2(index2:number){
        return this.products2[index2]
    }


    getProducts3(){
        return this.products3.slice();
        
    }
    getProduct3(index3:number){
        return this.products3[index3]
    }


    getProducts4(){
        return this.products4.slice();
        
    }
    getProduct4(index4:number){
        return this.products4[index4]
    }



    getProducts5(){
        return this.products5.slice();
        
    }
    getProduct5(index5:number){
        return this.products5[index5]
    }


    getProducts6(){
        return this.products6.slice();
        
    }
    getProduct6(index6:number){
        return this.products6[index6]
    }

    
    getProducts7(){
        return this.products7.slice();
        
    }
    getProduct7(index7:number){
        return this.products7[index7]
    }

    
}