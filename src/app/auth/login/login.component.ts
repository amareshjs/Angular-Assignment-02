import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDetailService } from 'src/app/services/login-detail.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  responsedata:any

  loginForm=new FormGroup({
    Email:new FormControl("",Validators.required),
    Password:new FormControl("",Validators.required),
  });

  constructor(
    private loginService:LoginDetailService,
    private route:Router
  ) { }

  login(){


    if(this.loginForm.valid){


        console.log(this.loginForm.value);
      this.loginService.login(this.loginForm.value).subscribe(result=>{
        if(result!=null){
          this.responsedata=result;
          console.log(this.responsedata)
          localStorage.setItem('token',this.responsedata.jwtToken);
          // this.route.navigate(['/feature/list']);
        }
      })










    // this.loginService.login(this.loginForm.value).subscribe(
    //   res=>console.log(res),
    //   err=>console.log(err)
    // )
    }

    
    
  }

  ngOnInit(): void {
  }

}
