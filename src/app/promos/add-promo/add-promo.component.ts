import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PromoServices} from '../PromoServices';

@Component({
  selector: 'app-add-promo',
  templateUrl: './add-promo.component.html',
  styleUrls: ['./add-promo.component.css']
})
export class AddPromoComponent implements OnInit {
  constructor( private  fb: FormBuilder, private service: PromoServices) { }
  referentils: any;
  title: string;
  description: string;
  lieu: string;
  profile: string;
  prmoForm: FormGroup;
  ngOnInit(): any {
    this.prmoForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      lieu: ['', [Validators.required, Validators.email]],
      // profiles: ['', [Validators.required]],
      // avatar: ['', [Validators.required]],
    }) ;
    this.getref()
  }
  getref(): any{
    this.service.getAllR().subscribe(
        date => {
          this.referentils = date;
      }
    );
  }

  onAdd(): any {
  }
}
