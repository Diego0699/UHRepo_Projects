import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-acerca',
  templateUrl: './acerca.component.html',
  styleUrls: ['./acerca.component.css']
})
export class AcercaComponent implements OnInit {
  postForm: NgForm;
  

  constructor(private http: HttpClient) { }

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
      this.postForm.setValue==null;
    });
    this.postForm.reset();
  
  }
  resetForm(postForm: NgForm) {
    // postForm.reset()
   postForm.setValue({
    asunto:'-- Seleccione --',
    comentario:'hola'
   })

  }
}
