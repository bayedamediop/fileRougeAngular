import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Router} from '@angular/router';
import {map} from 'rxjs/operators';
import {environment} from '../environments/environment';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private roles: any;
  constructor(private https: HttpClient, private router: Router) { }
  baseUrl = environment.baseUrl;
  helper = new JwtHelperService();
  get(): Observable<any> {
    return this.https.get('http://127.0.0.1:8000/api/admin/users?isdelate=1');
  }
  login(email: string, password: string): any{
    return this.https.post<any>( `${this.baseUrl}/login_check`, {
      email , password
    }).pipe(
      map((response: any ) => {
        const decoded = this.helper.decodeToken(response.token);
        console.log(decoded);
        localStorage.setItem('token', response.token);
        // console.log(decoded.roles);
        if (decoded.roles === 'ROLE_ADMIN') {
          this.router.navigate(['users']);
        }
        else if ( decoded.roles === 'ROLE_FORMATEUR') {
          this.router.navigate(['apprenants']);
          // this.router.navigate(['formateur']);
        } else if (decoded.roles === 'ROLE_CM') {
          this.router.navigate(['users']);
          // this.router.navigate(['cm']);
        }else if (decoded.roles === 'ROLE_APPRENANT') {
         // console.log('apprenant');
          // this.router.navigate(['apprenant']);
        }
      })
    );
  }
  getToken(): string{
    const token = localStorage.getItem('token');
    if ( token !== 'undefined'){
      return token;
    }else {
      return null;
    }
  }
  logout(): void{
    localStorage.removeItem('token');
  }
}
