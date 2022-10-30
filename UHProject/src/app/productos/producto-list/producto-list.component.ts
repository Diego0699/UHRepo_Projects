import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../../shared/producto.model';
import { ProductoService } from '../producto.service';

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

  constructor(private productoService:ProductoService,
              private router:Router) { }

  ngOnInit() {
    this.Placas = this.productoService.getProducts();
    this.Procesadores = this.productoService.getProducts2();
    this.Ram = this.productoService.getProducts3();
    this.Almacenamiento = this.productoService.getProducts4();
    this.Enfriamiento = this.productoService.getProducts5();
    this.Fuentes = this.productoService.getProducts6();
    this.Graficas = this.productoService.getProducts7();
  }
 

}
