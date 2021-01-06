import { Component, OnInit } from '@angular/core';
import {Users} from '../../moduls/users';
import {UserService} from '../user.service';
import * as jsPDF from 'jspdf';




@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  private htmlData: any;

  constructor( private service: UserService) { }
  user: Users[];
 public p = 1;
  search = '';
 public pageSize = 5;
ngOnInit(): void {
    this.service.actualisation.
    subscribe(() => {
      this.getAll();
    });
    this.getAll();
  }
getAll(): any {
    this.service.getAllUser().subscribe(
      date => {
        this.user = date;
      }
    );
  }
delete(id): any {
    if (confirm('Voullez vous vraiment supprimmer !!!!!')){
    this.service.deleteUser(id)
      .subscribe(
        data => {
          console.log(data);
        },
        error => console.log(error));
    }
  }
}
