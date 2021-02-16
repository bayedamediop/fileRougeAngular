import { Component, OnInit } from '@angular/core';
import {Services} from '../services';
import {GrpCompetences} from '../../moduls/grpCompetences';

@Component({
  selector: 'app-list-grp-c',
  templateUrl: './list-grp-c.component.html',
  styleUrls: ['./list-grp-c.component.css']
})
export class ListGrpCComponent implements OnInit {
 grpcomp: any;
  p = 1;

  constructor( private service: Services) { }

  ngOnInit(): void {
    this.get();
  }
get(): any{
    this.service.getAllgrpecompetences().subscribe(
      data => {
        this.grpcomp = data;
        console.log(this.grpcomp);
      }
    );
}
}
