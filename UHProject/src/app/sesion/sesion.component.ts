import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.css']
})
export class SesionComponent implements OnInit {
  isLoginMode = true;
  isLoading = false;
  error:string = null;

  constructor(private authService:AuthService,
              private router:Router) { }

  ngOnInit(): void {
  }
  
 
 
  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }
  onSubmit(form:NgForm){
    if(!form.valid){
      return;
    }
    const email = form.value.email;
    const password = form.value.password;
    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;
    if(this.isLoginMode){
      authObs = this.authService.iniciarSesion(email,password);
    }else{
      authObs = this.authService.registrar(email,password)
      Swal.fire('Registro', 'Usuario registrado correctamente' ,'success');
    }

  
    authObs.subscribe(
      resData =>{
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['./inicio']);
      },
      errorMessage =>{
        console.log(errorMessage);
        Swal.fire('Error', (errorMessage) ,'error');
        this.isLoading = false;
      }
    )

    form.reset();
  }
}
