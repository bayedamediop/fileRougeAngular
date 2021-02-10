import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PromoServices {
  url = 'http://127.0.0.1:8000/api/admin/promos';
  constructor( private http: HttpClient) { }
  private actualise = new Subject <void>();
  get actualisation(): Subject<void>{
    return this.actualise;
  }

  getAllPr(): any{
    return this.http.get(this.url);
  }
  getAllR(): any{
    return this.http.get('http://127.0.0.1:8000/api/admin/referentiels');
  }

  getUserById( id: number): any{
    return this.http.get(this.url + `/${id}`);
  }
  getUserProfiles( id: number): any{
    return this.http.get(this.url + `/${id}/users`);
  }
  // getUserConnecte(user: Users): Users{
  // return  this.user ;
//  }
  addPromo(promo: any): any
  {
    return  this.http.post(this.url, promo);
  }
  updated(id: number, user): any{
    return this.http.put(this.url + `/${id}`, {user});
  }
  deleteUser(id: number): any{
    return this.http.delete(this.url + `/${id}`).pipe(
      tap(() => {
        this.actualise.next();
      })
    );
  }
}

