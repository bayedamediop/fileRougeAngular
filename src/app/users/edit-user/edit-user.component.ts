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
  dataUsers: Users;
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
      this.dataUsers = data ;
      console.log(this.dataUsers);
      this.nom = this.dataUsers.nom;
      this.prenom = this.dataUsers.prenom;
      this.email = this.dataUsers.email;
      this.telephone = this.dataUsers.telephone;
      this.profile = this.dataUsers.profile;
      // this.avatar = this.dataUsers.avatar;
      if (this.dataUsers.avatar !== null) {
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
  onAdd(): any {
    const formValue = this.dataUsers ;
   // console.log(this.dataUsers);
    const formData = new FormData();
    for (const key of Object.keys(formValue)) {
      if (key !== 'avatar') {
        const value =  formValue[key] ;
       // console.log(value);
        formData.append(key, value) ;
      }
    }
    if (this.selectedFile) {
      formData.append('avatar',  this.selectedFile) ;
    }
    this.service.updated(this.idUserUpdated, formData).subscribe(data => {
      alert('User updated');
      // this.router.navigate(['/listUsers']);
    }, error => {
      console.log(error);
      this.errorSubmitted = true;
    }) ;

    this.submitted = true;
  }

  // tslint:disable-next-line:typedef
  return() {
    if (confirm('You are about to quit this page')) {
      // this.router.navigate(['/listUsers']);
    }
  }
}
