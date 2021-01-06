import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrpCComponent } from './edit-grp-c.component';

describe('EditGrpCComponent', () => {
  let component: EditGrpCComponent;
  let fixture: ComponentFixture<EditGrpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrpCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
