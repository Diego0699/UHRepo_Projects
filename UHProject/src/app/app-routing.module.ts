import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AcercaComponent } from "./acerca/acerca.component";
import { CarritoComponent } from "./carrito/carrito.component";
import { InicioComponent } from "./inicio/inicio.component";
import { ProductosComponent } from "./productos/productos.component";
import { RegistroComponent } from "./registro/registro.component";


import { SesionComponent } from "./sesion/sesion.component";
const appRoutes:Routes=[
    {path: '', redirectTo: '/inicio',pathMatch:'full'},
    {path: 'inicio',component:InicioComponent},
    {path: 'acerca',component:AcercaComponent},
    {path: 'productos',component:ProductosComponent},
    {path: 'carrito',component:CarritoComponent},
    {path: 'sesion',component:SesionComponent},
    {path: 'registro',component:RegistroComponent},
  
    
    
]
@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}