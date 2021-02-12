import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProfilServicesService} from '../profil-services.service';
import {Profils} from '../../moduls/profils';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {
profile: any;
  libele: string;
  constructor( private route: ActivatedRoute, private router: Router, private service: ProfilServicesService) { }
  ngOnInit(): void {
    const  idp = this.route.snapshot.params.id;
    this.profile = this.service.getProflilById(+idp).subscribe(
      data => {
      this.profile = data;
      this.libele = this.profile.libele;
    });
  }

  update(formElement: NgForm): any{
    const  id = +this.route.snapshot.params.id;
    if (confirm('Are you sure that you remove this profil?')) {
      this.service.updated(id, formElement.value.libelle).subscribe(data => {
        alert('Profil removed with success');
        this.router.navigate(['/profiles']);
      } , error => {
        console.log(error);
      });
    }
  }
}
