import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public regForm: FormGroup | undefined;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.initRegForm();
    
    
  }
initRegForm(): void{
  this.regForm = this.fb.group({
    firstName: ['', [
      Validators.required
    ]],
    lastName: ['', [
      Validators.required
    ]],
    username: ['', [
      Validators.required
    ]],
    passwrd: ['', [
      Validators.required, Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')
    ]],// validator requires at least 1 letter and 1 number in the password string
    agree: [false, [
      Validators.requiredTrue
    ]]

  });
  this.regForm.valueChanges.subscribe(console.log);

}

onSubmit(): void{
  console.log(this.regForm);
}

get firstName() {
  return this.regForm?.get('firstName');
}
get lasttName() {
  return this.regForm?.get('lasttName');
}
get username() {
  return this.regForm?.get('username');
}
get passwrd() {
  return this.regForm?.get('passwrd');
}
get agree() {
  return this.regForm?.get('agree');
}

}
