import { EventEmitter, Injectable } from "@angular/core";
import { CarritoProducto } from "../shared/carrito.model";
import { CarritoCompraService } from "../carrito/carrito.service";
import { Product } from "../shared/producto.model";

@Injectable({
    providedIn: 'root'
})
export class ProductoService{
     productSelected = new EventEmitter<Product>();
    

     // Lista Placas Madre
    private Placas:Product[]=[
        new Product(0,'GIGABYTE H610M H DDR4',
        75000,
        'https://extremetechcr.com/tienda/19093-large_default/gigabyte-h610m-h-ddr4.jpg'),

         new Product(1,'ASUS PRIME B460M A',
         80000,
         'https://extremetechcr.com/tienda/16516-large_default/asus-prime-b460m-a.jpg'),

         new Product(2,'MSI PRO B660M-G DDR4',
         82000,
        'https://extremetechcr.com/tienda/19861-large_default/msi-pro-b660m-g-ddr4.jpg'),


         new Product(3,'GIGABYTE B660 AORUS MASTER DDR4',
         230000,
         'https://extremetechcr.com/tienda/18857-large_default/gigabyte-b660-a-master-ddr4.jpg'),
         
         new Product(4,'ASROCK X670E TAICHI WIFI',
         380000,
        'https://extremetechcr.com/tienda/21930-large_default/asrock-x670e-taichi.jpg')
    
    ];

    // Lista Procesadores
    private Procesadores:Product[]=[
        new Product(5,'INTEL CORE I5 10400',
        130000,
        'https://extremetechcr.com/tienda/10045-large_default/intel-core-i5-10400.jpg'),

         new Product(6,'AMD RYZEN 5 5600',
         12000,
         'https://extremetechcr.com/tienda/20222-large_default/amd-ryzen-5-5600.jpg'),
         new Product(7,'AMD RYZEN 7 5700G',
         190000,
        'https://extremetechcr.com/tienda/16281-large_default/amd-ryzen-7-5700g.jpg'),

         new Product(8,'INTEL CORE I9 12900KF',
         480000,
         'https://extremetechcr.com/tienda/17711-large_default/intel-core-i9-12900kf.jpg'),
         new Product(9,'AMD RYZEN 9 7950X',
         580000,
        'https://extremetechcr.com/tienda/21808-large_default/amd-ryzen-9-7950x.jpg')
    
    ];
     // Lista Ram
    private Ram:Product[]=[
        new Product(10,'ADATA XPG SPECTRIX D41 RGB 16 GB DDR4 3200 - GRIS',
        35000,
        'https://extremetechcr.com/tienda/9326-large_default/adata-xpg-spectrix-d41-rgb-16-gb-ddr4-3200-gris.jpg'),

         new Product(11,'G.SKILL TRIDENT Z5 16 GB DDR5 5600 - SILVER',
         85000,
         'https://extremetechcr.com/tienda/18444-large_default/gskill-trident-z5-16-gb-ddr5-5600cl36-silver.jpg'),
         
         new Product(12,'ADATA XPG LANCER RGB 16 GB DDR5 5200',
         88000,
        'https://extremetechcr.com/tienda/19206-large_default/adata-xpg-lancer-16-gb-ddr5-5200-rgb.jpg'),

         new Product(13,'G.SKILL TRIDENT Z5 16 GB DDR5 5600 - NEGRO',
         90000,
         'https://extremetechcr.com/tienda/18430-large_default/gskill-trident-z5-16-gb-ddr5-5600cl36-negro.jpg'),
         
         new Product(14,'G.SKILL TRIDENT Z5 RGB 16 GB DDR5 6000/CL36-76 - SILVER',
         105000,
        'https://extremetechcr.com/tienda/19700-large_default/gskill-trident-z5-rgb-16-gb-ddr5-6000cl36-76-silver.jpg')
    
    ];
    
     // Lista Almacenamiento
    private Almacenamiento:Product[]=[
        new Product(15,'ADATA XPG GAMMIX S11 PRO 256 GB',
        26000,
        'https://extremetechcr.com/tienda/6111-large_default/adata-xpg-gammix-s11-pro-256-gb.jpg'),

         new Product(16,'ADATA LEGEND 750 500GB',
         30000,
         'https://extremetechcr.com/tienda/18541-home_default/adata-legend-750-500gb.jpg'),
        
         new Product(17,'ADATA XPG SPECTRIX S40G RGB 512 GB',
         38000,
        'https://extremetechcr.com/tienda/7106-home_default/adata-xpg-spectrix-s40g-512-gb.jpg'),

         new Product(18,'PATRIOT P210 2 TB',
         90000,
         'https://extremetechcr.com/tienda/21609-large_default/patriot-p210-2-tb.jpg'),

         new Product(19,'ADATA XPG GAMMIX S70 BLADE 2TB',
         155000,
        'https://extremetechcr.com/tienda/18015-large_default/adata-xpg-gammix-s70-blade-2tb.jpg')
    
    ];

     // Lista Enfriamiento
    private Enfriamiento:Product[]=[
        new Product(20,'EVGA CLC 120',
        30000,
        'https://extremetechcr.com/tienda/14775-large_default/evga-clc-120.jpg'),

         new Product(21,'AZZA BLIZZARD ARGB 360MM',
         60000,
         'https://extremetechcr.com/tienda/15626-large_default/azza-blizzard-360mm-argb.jpg'),
        
         new Product(22,'MSI MAG CORELIQUID P240',
         65000,
        'https://extremetechcr.com/tienda/20170-large_default/msi-mag-coreliquid-p240.jpg'),

         new Product(23,'NZXT KRAKEN X73 RGB',
         165000,
         'https://extremetechcr.com/tienda/14609-large_default/nzxt-kraken-x73-rgb.jpg'),
        
         new Product(24,'NZXT KRAKEN X73 RGB BLANCO',
         220000,
        'https://extremetechcr.com/tienda/19563-large_default/nzxt-kraken-x73-rgb-blanco.jpg')
    
    ];
     // Lista Fuentes de poder
    private Fuentes:Product[]=[
        new Product(25,'SEASONIC FOCUS GM-850 - 80 PLUS GOLD',
        92000,
        'https://extremetechcr.com/tienda/14467-large_default/seasonic-focus-gm-850-80-plus-gold.jpg'),

         new Product(26,'ASUS ROG STRIX 850W - 80 PLUS GOLD',
         145000,
         'https://extremetechcr.com/tienda/14524-large_default/asus-rog-strix-850w-80-plus-gold.jpg'),
       
         new Product(27,'SEASONIC PRIME PX 1300 PLATINUM',
         200000,
        'https://extremetechcr.com/tienda/8668-large_default/seasonic-prime-px-1300-platinum.jpg'),

         new Product(28,'ASUS ROG THOR 1200P - 80 PLUS PLATINUM',
         280000,
         'https://extremetechcr.com/tienda/15210-large_default/asus-rog-thor-1200p.jpg'),
        
         new Product(29,'ASUS ROG THOR 1000W PLATINUM II',
         295000,
        'https://extremetechcr.com/tienda/19613-large_default/asus-rog-thor-1000w-platinum-ii.jpg')
    
    ];
    // Lista Graficas
    private Graficas:Product[]=[
        new Product(30,'MSI GEFORCE RTX 3060 VENTUS 2X 12 GB',
        315000,
        'https://extremetechcr.com/tienda/15489-large_default/msi-geforce-rtx3060-ventus-2x-oc-12g.jpg'),

         new Product(31,'GIGABYTE GEFORCE RTX 3060 GAMING OC 12 GB',
         325000,
         'https://extremetechcr.com/tienda/15241-large_default/gigabyte-geforce-rtx-3060-gaming-oc-12-gb.jpg'),
        
         new Product(32,'SAPPHIRE NITRO+ RADEON RX 6650 XT 8 GB OC',
         350000,
        'https://extremetechcr.com/tienda/20611-large_default/sapphire-niro-radeon-rx-6650-xt-8gb-oc.jpg'),

         new Product(33,'GIGABYTE GEFORCE RTX 4090 GAMING OC 24 GB ',
         1320000,
         'https://extremetechcr.com/tienda/22117-large_default/gigabyte-geforce-rtx-4090-gaming-oc-24-gb.jpg'),

         
         new Product(34,'MSI GEFORCE RTX 4090 GAMING TRIO 24G',
         1322000,
        'https://extremetechcr.com/tienda/22116-large_default/msi-geforce-rtx-4090-gaming-trio-24g.jpg')
    
    ];
    constructor(private carritoService:CarritoCompraService){}
   
    getProducts(){
        return this.Placas.slice();
        
    }
    getProduct(id:number){
        const product = this.Placas.find(
            (p) => {
                return p.id === id;
            }
        );
        return product;
        // return this.Placas[index]
    }




    getProducts2(){
        return this.Procesadores.slice();
        
    }
    getProduct2(id:number){
        const product = this.Procesadores.find(
            (p) => {
                return p.id === id;
            }
        );
        return product;
        // return this.Procesadores[index]
    }


    getProducts3(){
        return this.Ram.slice();
        
    }
    getProduct3(id:number){
        const product = this.Ram.find(
            (p) => {
                return p.id === id;
            }
        );
        return product;
        // return this.Ram[index]
    }


    getProducts4(){
        return this.Almacenamiento.slice();
        
    }
    getProduct4(id:number){
        const product = this.Almacenamiento.find(
            (p) => {
                return p.id === id;
            }
        );
        return product;
        // return this.Almacenamiento[index]
    }



    getProducts5(){
        return this.Enfriamiento.slice();
        
    }
    getProduct5(id:number){
        const product = this.Enfriamiento.find(
            (p) => {
                return p.id === id;
            }
        );
        return product;
        // return this.Enfriamiento[index]
    }


    getProducts6(){
        return this.Fuentes.slice();
        
    }
    getProduct6(id:number){
        const product = this.Fuentes.find(
            (p) => {
                return p.id === id;
            }
        );
        return product;
        // return this.Fuentes[index]
    }

    
    getProducts7(){
        return this.Graficas.slice();
        
    }
    getProduct7(id:number){
        const product = this.Graficas.find(
            (p) => {
                return p.id === id;
            }
        );
        return product;
        // return this.Graficas[index]
    }

    addProductoToCarrito(productosCarrito:Product[]){

    }
    
}