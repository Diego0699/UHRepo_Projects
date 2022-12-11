
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { InicioComponent } from './inicio/inicio.component';
import { AcercaComponent } from './acerca/acerca.component';
import { ProductosComponent } from './productos/productos.component';

import { CarritoComponent } from './carrito/carrito.component';
import { ProductoDetailComponent } from './productos/producto-detail/producto-detail.component';
import { ProductoListComponent } from './productos/producto-list/producto-list.component';
import { ProductoItemComponent } from './productos/producto-list/producto-item/producto-item.component';

import { SesionComponent } from './sesion/sesion.component';
import { InicioListComponent } from './inicio/inicio-list/inicio-list.component';
import { InicioItemComponent } from './inicio/inicio-list/inicio-item/inicio-item.component';
import { InicioItem2Component } from './inicio/inicio-list/inicio-item2/inicio-item2.component';
import { RouterModule, Routes } from '@angular/router';

import { ProductoItem2Component } from './productos/producto-list/producto-item2/producto-item2.component';
import { ProductoItem3Component } from './productos/producto-list/producto-item3/producto-item3.component';
import { ProductoItem4Component } from './productos/producto-list/producto-item4/producto-item4.component';
import { ProductoItem5Component } from './productos/producto-list/producto-item5/producto-item5.component';
import { ProductoItem6Component } from './productos/producto-list/producto-item6/producto-item6.component';
import { ProductoItem7Component } from './productos/producto-list/producto-item7/producto-item7.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductoStartComponent } from './productos/producto-list/producto-start/producto-start.component';
import { ShortenPipe } from './productos/shorten.pipe';
import { CarritoCompraService } from './carrito/carrito.service';
import { CarritoListComponent } from './carrito/carrito-list/carrito-list.component';
import { CarritoItemsComponent } from './carrito/carrito-list/carrito-items/carrito-items.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { FormsModule } from '@angular/forms';






@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DropdownDirective,
    InicioComponent,
    AcercaComponent,
    ProductosComponent,
    CarritoComponent,
    ProductoDetailComponent,
    ProductoListComponent,
    ProductoItemComponent,
    SesionComponent,
    InicioListComponent,
    InicioItemComponent,
    InicioItem2Component,
    ProductoItem2Component,
    ProductoItem3Component,
    ProductoItem4Component,
    ProductoItem5Component,
    ProductoItem6Component,
    ProductoItem7Component,
    ProductoStartComponent,
    ShortenPipe,
    CarritoListComponent,
    CarritoItemsComponent,
    LoadingSpinnerComponent
    
    
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
