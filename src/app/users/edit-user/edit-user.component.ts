import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {ActivatedRoute} from '@angular/router';
import {Users} from '../../moduls/users';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  constructor( private service: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
  public link: any;
  selectedFile: any;
  userForm: FormGroup;
 user: Users;
  nom: any;
  prenom: any;
  email: any;
  telephone: number;
  profile: any;
  avatar: any;
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
    this.user = this.service.getUserById(+id).subscribe(
      data => {
        this.user = data;
      }
    );
    this.userForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      profile: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
  }
  onAdd(): any {
    const id = this.route.snapshot.params.id;
    // const formValue = this.userForm.value ;
    //  const formData = new FormData();
    // for ( const key of Object.keys(formValue) ) {
    //   if (key !== 'avatar'){
    //     const value = formValue[key];
    //     formData.append(key, value);
    //   }
    // }
    // formData.append('avatar', this.selectedFile);
    // this.service.updated(id, formData).subscribe(
    //   (response ) => {
    //     console.log(response);
    //   }, (error) => {
    //     console.log(error);
    //   }
    // );


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
