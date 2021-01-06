import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListGrpCComponent } from './list-grp-c.component';

describe('ListGrpCComponent', () => {
  let component: ListGrpCComponent;
  let fixture: ComponentFixture<ListGrpCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListGrpCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListGrpCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
