import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { async } from 'rxjs/internal/scheduler/async';
import { Meal } from '../interfaces/meal';

import { MealService } from './meal.service';

fdescribe('MealService', () => {
  let service: MealService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);

    TestBed.configureTestingModule({
      providers: [
        MealService,
        { provide: HttpClient, useValue: httpClientSpy },
      ],
    });
    service = TestBed.inject(MealService);
    httpClientSpy = TestBed.inject(HttpClient) as jasmine.SpyObj<HttpClient>;
  });

  fit('should be created', () => {
    expect(service).toBeTruthy();
  });

  fit('should return expected meals (HttpClient called once)', (done: DoneFn) => {
    const expectedMeals: Meal[] = [
      {
        _id: '1',
        name: 'Meal 1',
        description: 'Meal 1 description',
        price: 10,
        restaurant: 'Restaurant 1',
      },
      {
        _id: '2',
        name: 'Meal 2',
        description: 'Meal 2 description',
        price: 20,
        restaurant: 'Restaurant 2',
      },
    ];

    httpClientSpy.get.and.returnValue(of(expectedMeals));

    service.getMeals('1').subscribe({
      next: (meals) => {
        expect(meals).withContext('expected meals').toEqual(expectedMeals);
        done();
      },
      error: done.fail,
    });
    expect(httpClientSpy.get.calls.count()).withContext('one call').toBe(1);
  });
});
