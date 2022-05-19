import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RestaurantDetailsPageComponent } from './restaurant-details-page.component';

describe('RestaurantDetailsPageComponent', () => {
  let component: RestaurantDetailsPageComponent;
  let fixture: ComponentFixture<RestaurantDetailsPageComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
