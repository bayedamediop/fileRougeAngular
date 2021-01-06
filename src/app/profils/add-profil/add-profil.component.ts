import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProfilServicesService} from '../profil-services.service';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  constructor(private service: ProfilServicesService) { }

  ngOnInit(): void {
  }

  ajouter(formElement: NgForm): void {
    this.service.addProfil(formElement.value).subscribe(
      (response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }
}
