import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../producto.model';
import { ProductoService } from '../../producto.service';

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.css']
})
export class ProductoItemComponent implements OnInit {
  @Input()product:Product;


  constructor(private productoService:ProductoService,
              private route:ActivatedRoute,
             ) { }

  ngOnInit(): void { 
  }
  //  onSelected(){
  //   this.productoService.productSelected.emit(this.product)
  //  }
}
