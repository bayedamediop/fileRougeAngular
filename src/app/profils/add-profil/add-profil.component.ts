import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ProfilServicesService} from '../profil-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-profil',
  templateUrl: './add-profil.component.html',
  styleUrls: ['./add-profil.component.css']
})
export class AddProfilComponent implements OnInit {
  constructor(private service: ProfilServicesService, private router: Router) { }

  ngOnInit(): void {
  }

  ajouter(formElement: NgForm): void {
    this.service.addProfil(formElement.value).subscribe(
      (response) => {
        alert('user added with success!');
        this.router.navigate(['profiles']);
      }, (error) => {
        console.log(error);
      });
  }
}
