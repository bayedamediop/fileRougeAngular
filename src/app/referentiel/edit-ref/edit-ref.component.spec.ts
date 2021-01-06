import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRefComponent } from './edit-ref.component';

describe('EditRefComponent', () => {
  let component: EditRefComponent;
  let fixture: ComponentFixture<EditRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
