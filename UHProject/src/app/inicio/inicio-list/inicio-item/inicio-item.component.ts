import { Component, Input, OnInit } from '@angular/core';
import { ProductInicio } from '../../inicio.model';
import { ProductInicioService } from '../../inicio.service';


@Component({
  selector: 'app-inicio-item',
  templateUrl: './inicio-item.component.html',
  styleUrls: ['./inicio-item.component.css']
})
export class InicioItemComponent implements OnInit {

  @Input()product:ProductInicio;


  constructor(private inicioService:ProductInicioService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.inicioService.productSelected.emit(this.product)
  
    
   }

}
