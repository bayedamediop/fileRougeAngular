import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  formLogin: FormGroup;
  fakeAuth = false;
  submitted = false;
  private token: string;
  constructor( private authService: AuthService, private route: Router,  private formBuilder: FormBuilder,
  ) {
  }
  ngOnInit(): any{
    this.formLogin = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [ Validators.required, Validators.minLength(4)]]
    });
  }
  get f(): any{
    return this.formLogin.controls ;
  }
  onSubmit(): any {
    this.submitted = true;
    if (this.formLogin.invalid) {
      return;
    }
    this.authService.login(this.f.email.value, this.f.password.value).subscribe(
      data => {
      // console.log(this.authService.getToken());
       this.route.navigate(['/users']);
       // console.log(data);
    }, (error) => {
        console.log(error);
        this.fakeAuth = true ;
        return ;
    });
  }
  }
