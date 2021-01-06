import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRefComponent } from './detail-ref.component';

describe('DetailRefComponent', () => {
  let component: DetailRefComponent;
  let fixture: ComponentFixture<DetailRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
