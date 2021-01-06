import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRefComponent } from './list-ref.component';

describe('ListRefComponent', () => {
  let component: ListRefComponent;
  let fixture: ComponentFixture<ListRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
