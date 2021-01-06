import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGrptagsComponent } from './add-grptags.component';

describe('AddGrptagsComponent', () => {
  let component: AddGrptagsComponent;
  let fixture: ComponentFixture<AddGrptagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGrptagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddGrptagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
