import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  postForm: NgForm;
  postData:{};
  

  constructor(private http: HttpClient) {
   
   }
  
  ngOnInit(): void {
  }
  onCreatePost(postData:{asunto:string; comentario:string}){
    //Send http request
    this.http
    .post(
      'https://technoflash-b5941-default-rtdb.firebaseio.com/comentarios.json',
      postData
    )
    .subscribe(responseData => {
      console.log(responseData);
    });
    Swal.fire('Enviado', 'Mensaje enviado correctamente! ' ,'success');
    this.resetForm
  }
  
  resetForm(postForm: NgForm) {
    postForm.reset()
  }
}
