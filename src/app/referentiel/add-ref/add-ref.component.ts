import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RefServices} from '../refServices';
import {GrpCompetences} from '../../moduls/grpCompetences';
import {Users} from '../../moduls/users';

@Component({
  selector: 'app-add-ref',
  templateUrl: './add-ref.component.html',
  styleUrls: ['./add-ref.component.css']
})
export class AddRefComponent implements OnInit {
   bienForm: FormGroup;
  constructor( private service: RefServices, private formBuilder: FormBuilder) { }
  grpC: GrpCompetences[];
  userForm: FormGroup;
  hide = true;
  link: 'le programme ';
  selectedFile: any;
  libelle: string;
  presentation: string;
  programme: any;
  evaluation: string;
  admission: string;
  grpecompetence: string;
  ngOnInit(): any {
    this.userForm = this.formBuilder.group({
      libelle: ['', [Validators.required]],
      presentation: ['', [Validators.required]],
      programme: ['', [Validators.required]],
      evaluation: ['', [Validators.required]],
      admission: ['', [Validators.required]],
      grpecompetence: ['', [Validators.required]],
    }) ;
    this.getG();
    this.addOptions();
  }

  addOptions(): any
  {
    const option = this.bienForm.controls.competences as FormArray;
    option.push(new FormControl(null));
  }
  getG(): any{
    this.service.getAllGrpeCo().subscribe(
      data => {
       return  this.grpC = data;
      }
    );
  }
  uploadefiler(event): any {
    this.selectedFile =  event.target.files[0];
    if (event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event: any) => {
        this.link = event.target.result;
      };
    }
  }
  onAdd(): any {
    const formValue = this.userForm.value ;
    console.log(this.userForm.value);
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      if (key !== 'programme'){
        const value = formValue[key];
        formData.append(key, value);
      }
    }
    formData.append('programme', this.selectedFile);
    console.log(formData);
    this.service.addRef(formData).subscribe(
      (response ) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
