import { Router } from '@angular/router';
import { AuthService } from './../sesion/auth.service';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  isAuthenticated = false;
  private userSub:Subscription;
  @Output() featureSelect =new EventEmitter<string>();
  onSelect(feature:string){
    this.featureSelect.emit(feature);
  }
  constructor(private authService: AuthService) { }
 

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
      console.log(!user);
      console.log(!!user);
    });
  }
  onCerrarSesion(){
    this.authService.cerrarSesion();
    
  }
  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }
}
