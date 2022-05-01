import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwnerMealsComponent } from './owner-meals.component';

describe('OwnerMealsComponent', () => {
  let component: OwnerMealsComponent;
  let fixture: ComponentFixture<OwnerMealsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwnerMealsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwnerMealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
