import { Component, OnInit } from '@angular/core';
import {Services} from '../services';
import {GrpCompetences} from '../../moduls/grpCompetences';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {Competences} from '../../moduls/competences';

@Component({
  selector: 'app-add-grp-c',
  templateUrl: './add-grp-c.component.html',
  styleUrls: ['./add-grp-c.component.css']
})
export class AddGrpCComponent implements OnInit {

  constructor( private service: Services) { }
  listsGrpC: any;
  competences: Competences[];
  bienForm: FormGroup;
  ngOnInit(): void {
    this.allCompe();
    this.bienForm =  new FormGroup(
      // 1 creation the forms
      {
        libelle: new FormControl(null, [Validators.required, ]),
        description: new FormControl(null, Validators.required),
        competences: new FormControl(null, Validators.required), // select
      }
    );
  }
  allCompe(): any{
    this.service.getAllcompetences().subscribe(
      data => {
        this.competences = data;
        console.log();
      }
    );
  }

  onSubmit(): any {
    const formValue = this.bienForm.value ;
    const formData = new FormData();
    for ( const key of Object.keys(formValue) ) {
        const value = formValue[key];
        formData.append(key, value);
    }
    this.service.addgrpc(formData).subscribe(
      (response ) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
