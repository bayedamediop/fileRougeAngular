import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailPSComponent } from './detail-p-s.component';

describe('DetailPSComponent', () => {
  let component: DetailPSComponent;
  let fixture: ComponentFixture<DetailPSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailPSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailPSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
