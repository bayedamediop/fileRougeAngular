import { Component, OnInit } from '@angular/core';
import {ProfilServicesService} from '../../profils/profil-services.service';
import {ProfilSorties} from '../profilSorties';

@Component({
  selector: 'app-list-profil-sortie',
  templateUrl: './list-profil-sortie.component.html',
  styleUrls: ['./list-profil-sortie.component.css']
})
export class ListProfilSortieComponent implements OnInit {

  constructor(private service: ProfilSorties) { }
profile: ProfilSorties;
  ngOnInit(): void {
    this.service.actualisation.
    subscribe(() => {
      this.getAll();
    });
    this.getAll();
  }
  getAll(): void{
    this.service.getAll()
      .subscribe(
        data => {
          this.profile = data;
        }, (error) => {
          console.log(error);
        }
      );
  }

  delete(id): any {
    if (confirm('Voullez vous vraiment supprimmer !!!!!')) {
      this.service.delete(id)
        .subscribe(
          data => {
            console.log(data);
          },
          error => console.log(error));
    }
  }
}
