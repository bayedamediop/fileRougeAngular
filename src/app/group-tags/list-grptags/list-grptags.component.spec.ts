import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrptagsComponent } from './list-grptags.component';

describe('ListGrptagsComponent', () => {
  let component: ListGrptagsComponent;
  let fixture: ComponentFixture<ListGrptagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrptagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrptagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
