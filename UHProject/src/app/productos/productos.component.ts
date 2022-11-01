import { Component, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { ProductoService } from './producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css'],
  providers:[ProductoService]
})
export class ProductosComponent implements OnInit {

 

  detailActivo:boolean;

  constructor() { }

  ngOnInit(): void {

    
  }

}
