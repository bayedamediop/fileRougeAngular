import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RefServices} from '../refServices';
import {GrpCompetences} from '../../moduls/grpCompetences';
import {Referentiels} from '../../moduls/referentiels';
import {ActivatedRoute} from '@angular/router';
import {Router} from '@angular/router';
import {UserService} from '../../users/user.service';
import {Users} from '../../moduls/users';

@Component({
  selector: 'app-edit-ref',
  templateUrl: './edit-ref.component.html',
  styleUrls: ['./edit-ref.component.css']
})
export class EditRefComponent implements OnInit {
  constructor( private service: RefServices, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
  public link: any;
  selectedFile: any;
  userForm: FormGroup;
  refs: Referentiels;
  grpC: GrpCompetences[];
  libelle: any;
  presentation: any;
  programme: any;
  evaluation: any;
  admission: any;
  grpecompetence: any;
  uploadefiler(event): any {
    this.selectedFile =  event.target.files[0];
    if (event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = ( event: any) => {
        this.link = event.target.result;
      };
    }
  }
  ngOnInit(): void {
    const  id = this.route.snapshot.params.id;
    this.refs = this.service.getRefeById(+id).subscribe(
      data => {
        this.refs = data;
      }
    );
    this.userForm = this.formBuilder.group({
      libelle: ['', [Validators.required]],
      presentation: ['', [Validators.required]],
      programme: ['', [Validators.required]],
      evaluation: ['', [Validators.required]],
      admission: ['', [Validators.required]],
      grpecompetence: ['', [Validators.required]],
    });
    this.getAllGC();
  }
  getAllGC(): any{
    this.service.getAllGrpeCo().subscribe(
      data => {
        return  this.grpC = data;
      }
    );
  }
  onAdd(): any {
    const id = this.route.snapshot.params.id;
    const formValue = this.userForm.value ;
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      if (key !== 'avatar'){
        const value = formValue[key];
        formData.append(key, value);
      }
    }
    formData.append('avatar', this.selectedFile);
    this.service.updated(id, formData).subscribe(
      (response ) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );

  }
}
