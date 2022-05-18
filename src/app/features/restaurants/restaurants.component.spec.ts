import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { CardComponent } from 'src/app/shared/card/card.component';
// import { cold } from 'jasmine-marbles';

import { RestaurantsComponent } from './restaurants.component';

fdescribe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;
  let getRestaurantsSpy;
  beforeEach(async(() => {
    const restaurants = [
      {
        id: 1,
        name: 'Test restaurant 1',
        description: 'Test 1 restarurant description',
      },
      {
        id: 2,
        name: 'Test restaurant 2',
        description: 'Test 2 restarurant description',
      },
    ];

    const restaurantService = jasmine.createSpyObj('RestaurantService', [
      'getRestaurants',
    ]);
    // Make the spy return a synchronous Observable with the test data
    // const restaurants$ = cold('---x|', { x: restaurants });
    const restaurants$ = of([]);

    getRestaurantsSpy =
      restaurantService.getRestaurants.and.returnValue(restaurants$);

    TestBed.configureTestingModule({
      declarations: [RestaurantsComponent, CardComponent],
      providers: [{ provide: RestaurantService, useValue: restaurantService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
  });

  fit('should create', () => {
    expect(component).toBeTruthy();
  });

  fit('should display restaurants message', () => {
    fixture.detectChanges(); // -> run ngOnInit

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toBe(
      ' 2 restaurants are waiting for you '
    );
    expect(getRestaurantsSpy.calls.any())
      .withContext('getRestaurantsSpy called')
      .toBe(true);
    expect(getRestaurantsSpy.calls.count())
      .withContext('getRestaurantsSpy called only once')
      .toBe(1);
  });

  fit('should display restaurants', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const restaurantsCardsTitles = compiled.querySelectorAll('h3');

    expect(restaurantsCardsTitles[0].textContent).toBe('Test restaurant 1');
    expect(restaurantsCardsTitles[1].textContent).toBe('Test restaurant 2');

    const restaurantCardsDescription = compiled.querySelectorAll('h4');
    expect(restaurantCardsDescription[0].textContent).toBe(
      'Test 1 restarurant description'
    );
    expect(restaurantCardsDescription[1].textContent).toBe(
      'Test 2 restarurant description'
    );
  });
});
