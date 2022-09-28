import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { FormsModule } from '@angular/forms';
import { SesionComponent } from './sesion/sesion.component';
import { InicioListComponent } from './inicio/inicio-list/inicio-list.component';
import { InicioItemComponent } from './inicio/inicio-list/inicio-item/inicio-item.component';
import { InicioItem2Component } from './inicio/inicio-list/inicio-item2/inicio-item2.component';


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
    InicioItem2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
