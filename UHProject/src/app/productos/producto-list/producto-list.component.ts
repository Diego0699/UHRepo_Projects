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

  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.products2 = this.productService.getProducts();
  }
  

}
