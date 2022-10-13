import { EventEmitter } from "@angular/core";
import { Product } from "./producto.model";

export class ProductService{
     productSelected = new EventEmitter<Product>();

     // Lista Placas Madre
    private products:Product[]=[
        new Product('GIGABYTE H610M H DDR4',
        75000,
        'https://extremetechcr.com/tienda/19093-large_default/gigabyte-h610m-h-ddr4.jpg'),

         new Product('ASUS PRIME B460M A',
         80000,
         'https://extremetechcr.com/tienda/16516-large_default/asus-prime-b460m-a.jpg'),

         new Product('MSI PRO B660M-G DDR4',
         82000,
        'https://extremetechcr.com/tienda/19861-large_default/msi-pro-b660m-g-ddr4.jpg'),


         new Product('GIGABYTE B660 AORUS MASTER DDR4',
         230000,
         'https://extremetechcr.com/tienda/18857-large_default/gigabyte-b660-a-master-ddr4.jpg'),
         
         new Product('ASROCK X670E TAICHI WIFI',
         400000,
        'https://extremetechcr.com/tienda/21930-large_default/asrock-x670e-taichi.jpg')
    
    ];

    // Lista Procesadores
    private products2:Product[]=[
        new Product('INTEL CORE I5 10400',
        130000,
        'https://extremetechcr.com/tienda/10045-large_default/intel-core-i5-10400.jpg'),

         new Product('AMD RYZEN 5 5600',
         12000,
         'https://extremetechcr.com/tienda/20222-large_default/amd-ryzen-5-5600.jpg'),
         new Product('AMD RYZEN 7 5700G',
         190000,
        'https://extremetechcr.com/tienda/16281-large_default/amd-ryzen-7-5700g.jpg'),

         new Product('INTEL CORE I9 12900KF',
         480000,
         'https://extremetechcr.com/tienda/17711-large_default/intel-core-i9-12900kf.jpg'),
         new Product('AMD RYZEN 9 7950X',
         580000,
        'https://extremetechcr.com/tienda/21808-large_default/amd-ryzen-9-7950x.jpg')
    
    ];
     // Lista Placas Ram
    private products3:Product[]=[
        new Product('ADATA XPG SPECTRIX D41 RGB 16 GB DDR4 3200 - GRIS',
        35000,
        'https://extremetechcr.com/tienda/9326-large_default/adata-xpg-spectrix-d41-rgb-16-gb-ddr4-3200-gris.jpg'),

         new Product('G.SKILL TRIDENT Z5 16 GB DDR5 5600 - SILVER',
         85000,
         'https://extremetechcr.com/tienda/18444-large_default/gskill-trident-z5-16-gb-ddr5-5600cl36-silver.jpg'),
         
         new Product('ADATA XPG LANCER RGB 16 GB DDR5 5200',
         88000,
        'https://extremetechcr.com/tienda/19206-large_default/adata-xpg-lancer-16-gb-ddr5-5200-rgb.jpg'),

         new Product('G.SKILL TRIDENT Z5 16 GB DDR5 5600 - NEGRO',
         90000,
         'https://extremetechcr.com/tienda/18430-large_default/gskill-trident-z5-16-gb-ddr5-5600cl36-negro.jpg'),
         
         new Product('G.SKILL TRIDENT Z5 RGB 16 GB DDR5 6000/CL36-76 - SILVER',
         105000,
        'https://extremetechcr.com/tienda/19700-large_default/gskill-trident-z5-rgb-16-gb-ddr5-6000cl36-76-silver.jpg')
    
    ];
    //falta agregar data desde aqui para abajo
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
    getProduct(index:number){
        return this.products[index]
    }




    getProducts2(){
        return this.products2.slice();
        
    }
    getProduct2(index:number){
        return this.products2[index]
    }


    getProducts3(){
        return this.products3.slice();
        
    }
    getProduct3(index:number){
        return this.products3[index]
    }


    getProducts4(){
        return this.products4.slice();
        
    }
    getProduct4(index:number){
        return this.products4[index]
    }



    getProducts5(){
        return this.products5.slice();
        
    }
    getProduct5(index:number){
        return this.products5[index]
    }


    getProducts6(){
        return this.products6.slice();
        
    }
    getProduct6(index:number){
        return this.products6[index]
    }

    
    getProducts7(){
        return this.products7.slice();
        
    }
    getProduct7(index:number){
        return this.products7[index]
    }

    
}