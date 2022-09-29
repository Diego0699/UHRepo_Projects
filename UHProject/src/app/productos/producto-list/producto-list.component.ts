import { Component, OnInit } from '@angular/core';
import { Product } from '../producto.model';
import { ProductService } from '../producto.service';

@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {


  products:Product[];
  products2:Product[];
  products3:Product[];
  products4:Product[];
  products5:Product[];
  products6:Product[];
  products7:Product[];

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.products2 = this.productService.getProducts2();
    this.products3 = this.productService.getProducts3();
    this.products4 = this.productService.getProducts4();
    this.products5 = this.productService.getProducts5();
    this.products6 = this.productService.getProducts6();
    this.products7 = this.productService.getProducts7();
  }
  

}
