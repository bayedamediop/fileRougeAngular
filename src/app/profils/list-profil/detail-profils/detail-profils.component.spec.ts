import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProfilsComponent } from './detail-profils.component';

describe('DetailProfilsComponent', () => {
  let component: DetailProfilsComponent;
  let fixture: ComponentFixture<DetailProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
