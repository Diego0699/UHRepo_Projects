import { Component, OnInit } from '@angular/core';
import { ProductInicio } from '../inicio.model';

import { ProductInicioService } from '../inicio.service';


@Component({
  selector: 'app-inicio-list',
  templateUrl: './inicio-list.component.html',
  styleUrls: ['./inicio-list.component.css']
})
export class InicioListComponent implements OnInit {

 
  products:ProductInicio[];
  products2:ProductInicio[];

  constructor(private productoInicioService:ProductInicioService) { }

  ngOnInit() {
    this.products = this.productoInicioService.getProducts();
    this.products2 = this.productoInicioService.getProducts2();
  }
}
