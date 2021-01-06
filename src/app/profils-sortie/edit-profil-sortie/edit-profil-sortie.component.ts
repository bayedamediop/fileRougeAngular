import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProfilSorties} from '../profilSorties';
import {ActivatedRoute} from '@angular/router';
import {ProfilServicesService} from '../../profils/profil-services.service';

@Component({
  selector: 'app-edit-profil-sortie',
  templateUrl: './edit-profil-sortie.component.html',
  styleUrls: ['./edit-profil-sortie.component.css']
})
export class EditProfilSortieComponent implements OnInit {
  profilSo: ProfilSorties;
  constructor(private service: ProfilSorties, private rute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.rute.snapshot.params.id;
    this.service.getProflilById(+id).subscribe(
      data => {
        this.profilSo = data;
      }
    );
  }

  update(formElement: NgForm): any{
    const  id = +this.rute.snapshot.params.id;
    this.service.updated(id, formElement.value.libelle).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
}
