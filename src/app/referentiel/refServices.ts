import {Injectable, OnInit} from '@angular/core';
import {Users} from '../moduls/users';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RefServices {
  url = 'http://127.0.0.1:8000/api/admin/referentieles';
  constructor( private http: HttpClient) { }
  private actualise = new Subject <void>();
  get actualisation(): Subject<void>{
    return this.actualise;
  }

  getAllGrpeCo(): any{
    return this.http.get('http://127.0.0.1:8000/api/admin/grpecompetences');
  }
  getAllReference(): Observable<any>{
    return this.http.get( this.url);
  }
  addRef(grpe): any{
    return this.http.post( this.url, grpe);
  }

  getRefeById( id: number): any{
    return this.http.get(this.url + `/${id}`);
  }
  getUserProfiles( id: number): any{
    return this.http.get(this.url + `/${id}/users`);
  }
  // getUserConnecte(user: Users): Users{
  // return  this.user ;
//  }
  updated(id: number, user: any): any{
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

