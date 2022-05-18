import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginDetailService {
  url="http://localhost:3000/login";

  constructor(private http:HttpClient) { }

  login(user:any){
    console.log(user)
    return this.http.post(this.url,user)
  }
}
