import { Component, OnInit } from '@angular/core';
import {ProfilServicesService} from '../profil-services.service';
import {Profils} from '../../moduls/profils';

@Component({
  selector: 'app-list-profil',
  templateUrl: './list-profil.component.html',
  styleUrls: ['./list-profil.component.css']
})
export class ListProfilComponent implements OnInit {
  profile: Profils;
  search = '';

  constructor( private  service: ProfilServicesService) { }
  ngOnInit(): void {
   this.service.actualisation.
     subscribe(() => {
       this.getAll();
   });
   this.getAll();
  }
  getAll(): void{
    this.service.getAllProfils()
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
