import { Component, OnInit } from '@angular/core';
import { ProductService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductService]
})
export class ProductosComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }

}
