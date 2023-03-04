import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
loginForm = new FormGroup({
user: new FormControl('',[Validators.required,Validators.minLength(5),Validators.email]),
password: new FormControl('',[Validators.required,Validators.minLength(5)])

})


  constructor() { }

  ngOnInit(): void {
  }


loginUser(){
  console.log(this.loginForm,Validators);
}

get user(){
  return this.loginForm.get('user')

}

get password(){
  return this.loginForm.get('password')
}
}
