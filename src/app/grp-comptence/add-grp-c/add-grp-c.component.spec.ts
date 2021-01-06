import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrpCComponent } from './add-grp-c.component';

describe('AddGrpCComponent', () => {
  let component: AddGrpCComponent;
  let fixture: ComponentFixture<AddGrpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrpCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
