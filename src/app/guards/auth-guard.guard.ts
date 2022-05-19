import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { LoginDetailService } from '../services/login-detail.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private loginService:LoginDetailService
  ){}
  
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      if(this.loginService.isLoggedIn){

        return true
      }
      else{
        return false
      }
  }
}
