import {Component, Input, OnInit} from '@angular/core';
import {Users} from '../../../moduls/users';
import {ActivatedRoute} from '@angular/router';
import {UserService} from '../../user.service';
import {NgxQrcodeElementTypes, NgxQrcodeErrorCorrectionLevels} from '@techiediaries/ngx-qrcode';

@Component({
  selector: 'app-detail-user',
  templateUrl: './detail-user.component.html',
  styleUrls: ['./detail-user.component.css']
})
export class DetailUserComponent implements OnInit {
  elementType = NgxQrcodeElementTypes.URL;
  correctionLevel = NgxQrcodeErrorCorrectionLevels.HIGH;
  user: Users;
  prfile: string;
  code: string;
  constructor( private route: ActivatedRoute, private service: UserService) { }
  ngOnInit(): void {
    const idUser: number = this.route.snapshot.params.id;
    this.user = this.service.getUserById(+idUser).subscribe(
      date => {
        this.user = date;
        this.code = date.nom + '\n' + date.prenom + '\n' + date.email + '\n' + date.telephone ;
      }
    );
  }

}
