import { Component, OnInit } from '@angular/core';
import {RefServices} from '../refServices';
import {Referentiels} from '../../moduls/referentiels';

@Component({
  selector: 'app-list-ref',
  templateUrl: './list-ref.component.html',
  styleUrls: ['./list-ref.component.css']
})
export class ListRefComponent implements OnInit {

  constructor(private service: RefServices) { }
referentiel: any;
  public p = 1;
  ngOnInit(): void {
    this.service.getAllReference().subscribe(
      data => {
        this.referentiel = data;
      }
    );
  }

}
