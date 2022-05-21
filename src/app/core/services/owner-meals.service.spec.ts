import { TestBed } from '@angular/core/testing';

import { OwnerMealsService } from './owner-meals.service';

describe('OwnerMealsService', () => {
  let service: OwnerMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OwnerMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
