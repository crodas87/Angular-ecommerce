import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map,filter } from 'rxjs/operators';
import { TokenService } from './../services/token.service';
import { AuthService } from './../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authService: AuthService,
    private router: Router
   
  ) { 
    console.log("ACCEDIMOS AL CONSTRUCTOR DEL GUARDIAN AUTENTICADOR");
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("USER",this.authService.user$);
      return this.authService.user$.pipe(        
        filter(user => user !== null), // Filtrar valores distintos de null
        map(user => {
          if (!user) {
            this.router.navigate(['/home']);
            return false;
          }
          return true;
        })
      );
    }

}
