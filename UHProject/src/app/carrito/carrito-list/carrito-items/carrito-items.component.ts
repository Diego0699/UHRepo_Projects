import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CarritoProducto } from 'src/app/shared/carrito.model';
import { CarritoCompraService } from '../../carrito.service';


@Component({
  selector: 'app-carrito-items',
  templateUrl: './carrito-items.component.html',
  styleUrls: ['./carrito-items.component.css']
})
export class CarritoItemsComponent implements OnInit {
  @Input()CarritoProductos:CarritoProducto;
  @Output() emitePrecio = new EventEmitter<number>();

  Subtotalf:number;
  IVAf: number;
  Totalf:number;

  sumaTotal:number;
  detalle=[];

  @Output() listaDetalle = new EventEmitter<any>();
  CantidadArticulo:number=1;
  public carritoProductosLista:CarritoProducto[];
  constructor(private carritoService:CarritoCompraService ) { 
  this.carritoProductosLista=[];

  this.sumaTotal=0;
  this.IVAf=0;
  this.Totalf=0;
  this.detalle=[this.Subtotalf,this.IVAf,this.Totalf];
  }
    
  ngOnInit(): void {
    this.carritoProductosLista.push(this.CarritoProductos);
    this.Subtotalf=this.CarritoProductos.price*this.CantidadArticulo;
    this.IVAf= this.Subtotalf * 0.13;
    this.Totalf = this.IVAf + this.Subtotalf;
    // sumarTotales()
    
  }

  // datosDetalle(){
  //   this.listaDetalle.emit(this.detalle[this.Subtotalf,this.IVAf,this.Totalf])
  // }

  onSumar(){
    this.CantidadArticulo++;
    this.Subtotalf=this.CarritoProductos.price*this.CantidadArticulo;
    this.IVAf= this.Subtotalf * 0.13;
      this.Totalf = this.IVAf + this.Subtotalf;
  }

  onRestar(){
    if(this.CantidadArticulo > 1){
      this.CantidadArticulo--;
      this.Subtotalf;
      this.Subtotalf=this.CarritoProductos.price*this.CantidadArticulo;
      this.IVAf= this.Subtotalf * 0.13;
      this.Totalf = this.IVAf + this.Subtotalf;
      

    }else{
      this.CantidadArticulo = 1;
      this.Subtotalf;

    };    
  }
   onDelete(index:number){
    if(index == this.CarritoProductos.id ){
      console.log(index);
      console.log(this.CarritoProductos.id);
      console.log(this.CarritoProductos)
      this.carritoProductosLista.splice(index,1)
      this.carritoService.deleteCarritoProducto(index);
      this.carritoService.getCarritoProductos();
    }
   }
}

function sumarTotales(){
  for (let p of this.carritoProductosLista) {
    this.sumaTotal+=this.carritoProductosLista[2]
  }
}