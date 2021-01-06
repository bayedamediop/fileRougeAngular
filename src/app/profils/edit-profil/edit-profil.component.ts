import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProfilServicesService} from '../profil-services.service';
import {Profils} from '../../moduls/profils';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
profile: Profils;
  libelle: string;
  constructor( private route: ActivatedRoute, private service: ProfilServicesService) { }
  ngOnInit(): void {
    const  idp = this.route.snapshot.params.id;
    this.profile = this.service.getProflilById(+idp).subscribe(
      data => {
      this.profile = data;
    });
  }

  update(formElement: NgForm): any{
    const  id = +this.route.snapshot.params.id;
    this.service.updated(id, formElement.value.libelle).subscribe(
     (response) => {
       console.log(response);
     }, (error) => {
       console.log(error);
     });
  }
}
