import { Component, OnInit } from '@angular/core';
import {Users} from '../../moduls/users';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  constructor( private service: UserService, private formBuilder: FormBuilder) {
  }
  link = 'assets/images/s2.jpeg';
  userForm: FormGroup;
  hide = true;
  selectedFile: any;
   user: Users [];
  nom: string;
  prenom: string;
  email: string;
  avatar: any;
  profile: string;
  ngOnInit(): any {
    // this.userForm = new FormGroup(
    //   {
    //     nom: new FormControl(null),
    //     prenom: new FormControl(),
    //     email: new FormControl(),
    //     profile: new FormControl(),
    //     avatar: new FormControl(),
    //   }
    // );
    this.userForm = this.formBuilder.group({
        nom: ['', [Validators.required]],
        prenom: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.email]],
        profiles: ['', [Validators.required]],
        avatar: ['', [Validators.required]],
    }) ;
  }
  uploadefiler(event): any {
    this.selectedFile =  event.target.files[0];
    if (event.target.files){
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = ( event: any) => {
        this.link = event.target.result;
      };
    }
  }

  onAdd(): any {
     const formValue = this.userForm.value ;
     const formData = new FormData();

     for ( const key of Object.keys(formValue) ) {
       if (key != 'avatar'){
         const value = formValue[key];
         formData.append(key, value);
       }
    }
     formData.append('avatar', this.selectedFile);
     this.service.addUser(formData).subscribe(
      (response ) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      }
    );
  }
}
