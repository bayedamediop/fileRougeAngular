import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrptagsComponent } from './edit-grptags.component';

describe('EditGrptagsComponent', () => {
  let component: EditGrptagsComponent;
  let fixture: ComponentFixture<EditGrptagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrptagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrptagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
