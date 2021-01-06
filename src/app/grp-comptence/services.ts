import {Injectable, OnInit} from '@angular/core';
import {Users} from '../moduls/users';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Services {
  url = 'http://127.0.0.1:8000/api/admin/grpecompetences';
  constructor( private http: HttpClient) { }
  private actualise = new Subject <void>();
  get actualisation(): Subject<void>{
    return this.actualise;
  }

  getAllgrpecompetences(): any{
    return this.http.get('http://127.0.0.1:8000/api/admin/grpecompetences');
  }
  getAllcompetences(): Observable<any>{
    return this.http.get( `http://127.0.0.1:8000/api/admin/competences`);
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
  addgrpc(grpc: any): any
  {
    return  this.http.post(`http://127.0.0.1:8000/api/admin/grpecompetences`, grpc);
  }
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

