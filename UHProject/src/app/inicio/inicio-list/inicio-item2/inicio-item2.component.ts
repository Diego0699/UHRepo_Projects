import { Component, Input, OnInit } from '@angular/core';
import { ProductInicio } from '../../inicio.model';
import { ProductInicioService } from '../../inicio.service';

@Component({
  selector: 'app-inicio-item2',
  templateUrl: './inicio-item2.component.html',
  styleUrls: ['./inicio-item2.component.css']
})
export class InicioItem2Component implements OnInit {

  
  @Input()product2:ProductInicio;


  constructor(private inicioService:ProductInicioService) { }

  ngOnInit(): void {
  }
   onSelected(){
     this.inicioService.productSelected.emit(this.product2)
  
    
   }

}
