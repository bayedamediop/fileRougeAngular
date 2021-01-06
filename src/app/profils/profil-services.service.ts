import {Injectable} from '@angular/core';
import {Profils} from '../moduls/profils';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {NgForm} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilServicesService {
 profil: Profils[];
 id: number;
  constructor(private http: HttpClient) { }
  url = 'http://127.0.0.1:8000/api/admin/profils';
  private actualise = new Subject <void>();
  get actualisation(): Subject<void>{
    return this.actualise;
  }
  getAllProfils(): Observable<any>{
    return this.http.get(this.url + `?archive=0`);
  }
  addProfil(p: Profils): Observable<any>  {
    return this.http.post(this.url, p).pipe(
      tap(() => {
        this.actualise.next();
    })
    );
  }
  delete(id: number): Observable<any>  {
    return this.http.delete(this.url + `/${id}`).pipe(
      tap(() => {
        this.actualise.next();
      })
    );
  }

  getProflilById( id: number): any{
    return this.http.get(this.url + `/${id}`).pipe(
      tap(() => {
        this.actualise.next();
      })
    );
  }
  getProfilUser( id: number): any{
    return this.http.get(`${this.url}/${id}/users`).pipe(
      tap(() => {
        this.actualise.next();
      })
    );
  }

  updated(id: number, libelle: any): any{
    return this.http.put(this.url + `/${id}`, {
      id,
      libelle
    });
  }
  getLastId(): any{
    return this.profil[this.profil.length - 1] ?
      this.profil[this.profil.length - 1] . id : 0;
  }

}

