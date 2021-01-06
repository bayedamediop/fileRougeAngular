import {Injectable} from '@angular/core';
import {Profils} from '../moduls/profils';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {NgForm} from '@angular/forms';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfilSorties {
  profiles: ProfilSorties[];
  id: number;
  libelle: string;
  constructor(private http: HttpClient) { }
  url = 'http://127.0.0.1:8000/api/admin/profilsortys';
  private actualise = new Subject <void>();
  get actualisation(): Subject<void>{
    return this.actualise;
  }
  getAll(): Observable<any>{
    return this.http.get(this.url);
  }
  addProfil(p: ProfilSorties): Observable<any>  {
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
  getProfilSortieById( id: number): any{
    return this.http.get(`${this.url}/${id}`);
  }

  updated(id: number, libelle: any): any{
    return this.http.put(this.url + `/${id}`, {
      id,
      libelle
    });
  }
  getLastId(): any{
    return this.profiles[this.profiles.length - 1] ?
      this.profiles[this.profiles.length - 1] . id : 0;
  }

}

