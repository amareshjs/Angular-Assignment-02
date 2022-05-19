import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetailService } from 'src/app/services/login-detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
  export class LoginComponent implements OnInit {
    submitted = false;
    /*Regular Expression for Email and Password validation*/
    emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$';
    passwordPattern =
      '(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'\\;:{\\}\\[\\]\\|\\+\\-\\=\\_\\)\\(\\)\\`\\/\\\\\\]])[A-Za-z0-9d$@].{7,}';



    loginForm=new FormGroup({
          email:new FormControl("",[Validators.required,Validators.pattern(this.emailPattern)]),
          password:new FormControl("",[Validators.required,Validators.pattern(this.passwordPattern)]),
        });
    
    constructor(
      private loginService : LoginDetailService,
      private router : Router,
      ) {}
    ngOnInit(): void {    }
    checkResponse=false
    login() {


      this.loginService.checkUser(this.loginForm.value.email,this.loginForm.value.password)
      this.checkResponse=true
    }

    get email(){
      return this.loginForm.get('email');
    }
    get password(){
      return this.loginForm.get('password');
    }
  }
