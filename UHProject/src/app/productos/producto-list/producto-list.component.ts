import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../producto.model';
import { ProductService } from '../producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {

  


  Placas:Product[];
  Procesadores:Product[];
  Ram:Product[];
  Almacenamiento:Product[];
  Enfriamiento:Product[];
  Fuentes:Product[];
  Graficas:Product[];

  constructor(private productService:ProductService,
              private router:Router) { }

  ngOnInit() {
    this.Placas = this.productService.getProducts();
    this.Procesadores = this.productService.getProducts2();
    this.Ram = this.productService.getProducts3();
    this.Almacenamiento = this.productService.getProducts4();
    this.Enfriamiento = this.productService.getProducts5();
    this.Fuentes = this.productService.getProducts6();
    this.Graficas = this.productService.getProducts7();
  }
 

}
