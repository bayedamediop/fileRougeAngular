import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {ProfilSorties} from '../profilSorties';

@Component({
  selector: 'app-add-profil-sortie',
  templateUrl: './add-profil-sortie.component.html',
  styleUrls: ['./add-profil-sortie.component.css']
})
export class AddProfilSortieComponent implements OnInit {
 profi: ProfilSorties;
  constructor(private service: ProfilSorties, private formBuilder: FormBuilder) { }
 libelle: string;
  ngOnInit(): void {
  }

  ajouter(myForm: NgForm): any {
    console.log(myForm.value);
    this.service.addProfil(myForm.value).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
}
