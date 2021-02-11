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
  private photoExist: boolean;
  constructor( private service: UserService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }
  link: any;
  selectedFile: any;
  userForm: FormGroup;
  user: Users;
  nom: string;
  prenom: string;
  email: any;
  telephone: number;
  profile: any;
  avatar: any;
  submitted = false;
  errorSubmitted = false;
  idUserUpdated: number | any;
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
  ngOnInit(): void {
    this.idUserUpdated = +this.route.snapshot.params.id ;
    // console.log(this.userForm) ;
    this.service.getUserById(this.idUserUpdated).subscribe( data => {
      this.user = data ;
      // console.log(this.dataUsers);
      this.nom = this.user.nom;
      this.prenom = this.user.prenom;
      this.email = this.user.email;
      this.telephone = this.user.telephone;
      this.profile = this.user.profile;
      this.avatar = this.user.avatar;
      if (this.user.avatar !== null) {
        this.photoExist = true;
        // console.log('photo exist!');
        // console.log(this.userUpdated.photo);
      }
    });
    this.userForm = this.formBuilder.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      telephone: ['', [Validators.required]],
      profile: ['', [Validators.required]],
      avatar: ['', [Validators.required]],
    });
  }
  onAdd(): any{
    const formValue = this.userForm.value ;
    const formData = new FormData();

    for ( const key of Object.keys(formValue) ) {
      if (key !== 'avatar'){
        const value = formValue[key];
        formData.append(key, value);
      }
    }
    formData.append('avatar', this.selectedFile);

    this.service.updated(this.idUserUpdated, formData).subscribe(
      (response ) => {
        // alert('User bien ajouter');
        console.log(response);
        // this.fakeAuth = true ;
        // return ;
      }, (error) => {
        console.log(error);
      }
    );
  }
}
