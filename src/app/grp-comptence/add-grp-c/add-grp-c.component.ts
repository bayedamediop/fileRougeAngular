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
        competence: new FormControl(null, Validators.required),
       // competences: new FormArray([]), // select
      }
    );
    this.addOptions();
  }

  addOptions(): any
  {
    const option = this.bienForm.controls.competences as FormArray;
    option.push(new FormControl(null));
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
    console.log(formValue);
    // formValue.competences.push(formValue.competence) ;
    // delete formValue['competence'];
    // delete formValue.competences[0];
    // const formData = new FormData();
    // for ( const key of Object.keys(formValue) ) {
    //     const value = formValue[key];
    //     formData.append(key, value);
    // }
    this.service.addgrpc(formValue).subscribe(
      (response ) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
