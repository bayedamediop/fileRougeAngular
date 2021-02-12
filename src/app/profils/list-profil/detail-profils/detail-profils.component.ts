import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../../moduls/users';
import {ActivatedRoute} from '@angular/router';
import {ProfilServicesService} from '../../profil-services.service';
import {Profils} from '../../../moduls/profils';

@Component({
  selector: 'app-detail-profils',
  templateUrl: './detail-profils.component.html',
  styleUrls: ['./detail-profils.component.css']
})
export class DetailProfilsComponent implements OnInit {
profiles: Profils;
p = 1;
  order: 'nom';
  constructor( private  route: ActivatedRoute, private service: ProfilServicesService) { }
  ngOnInit(): void {
    const idProfile: number = this.route.snapshot.params.id;
    this.profiles = this.service.getProfilUser(+idProfile).subscribe(
      data => {
        this.profiles = data;
      }
    );
  }
}
