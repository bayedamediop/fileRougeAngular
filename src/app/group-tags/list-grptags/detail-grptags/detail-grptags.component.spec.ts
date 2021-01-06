import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailGrptagsComponent } from './detail-grptags.component';

describe('DetailGrptagsComponent', () => {
  let component: DetailGrptagsComponent;
  let fixture: ComponentFixture<DetailGrptagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailGrptagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailGrptagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
