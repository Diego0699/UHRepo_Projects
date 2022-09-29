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
import { RouterModule, Routes } from '@angular/router';
import { RegistrarComponent } from './sesion/registrar/registrar.component';
import { ProductoItem2Component } from './productos/producto-list/producto-item2/producto-item2.component';
import { ProductoItem3Component } from './productos/producto-list/producto-item3/producto-item3.component';
import { ProductoItem4Component } from './productos/producto-list/producto-item4/producto-item4.component';
import { ProductoItem5Component } from './productos/producto-list/producto-item5/producto-item5.component';
import { ProductoItem6Component } from './productos/producto-list/producto-item6/producto-item6.component';
import { ProductoItem7Component } from './productos/producto-list/producto-item7/producto-item7.component';



const appRoutes: Routes=[
  {path:'', component:InicioComponent},
  {path:'acerca', component:AcercaComponent},
  {path:'productos', component:ProductosComponent},
  {path:'carrito', component:CarritoComponent},
  {path:'sesion', component:SesionComponent},
  
] 

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
    RegistrarComponent,
    ProductoItem2Component,
    ProductoItem3Component,
    ProductoItem4Component,
    ProductoItem5Component,
    ProductoItem6Component,
    ProductoItem7Component,
  
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
