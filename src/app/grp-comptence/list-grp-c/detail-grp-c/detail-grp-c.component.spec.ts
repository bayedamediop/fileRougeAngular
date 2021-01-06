import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrpCComponent } from './detail-grp-c.component';

describe('DetailGrpCComponent', () => {
  let component: DetailGrpCComponent;
  let fixture: ComponentFixture<DetailGrpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGrpCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGrpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
