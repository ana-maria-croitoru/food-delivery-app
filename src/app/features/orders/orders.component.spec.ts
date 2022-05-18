import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { OrderService } from 'src/app/core/services/order.service';

import { OrdersComponent } from './orders.component';

describe('OrdersComponent', () => {
  let component: OrdersComponent;
  let fixture: ComponentFixture<OrdersComponent>;
  let getOrdersSpy;

  beforeEach(async(() => {
    const orders = [
      {
        customer: 'Customer order 1',
        restaurant: '1',
        restaurantname: 'Test 1 restaurant name',
        meals: [
          {
            _id: '001',
            name: 'Meal name',
            description: 'Meal description',
            price: 100,
            restaurant: 'Restaurant',
            quantity: 1,
          },
          {
            _id: '002',
            name: 'Meal 2 name',
            description: 'Meal 2 description',
            price: 200,
            restaurant: 'Restaurant 2',
            quantity: 1,
          },
        ],
        totalAmount: 1000,
        restaurantOwner: 'Test 1 restaurant owner',
      },
      {
        customer: 'Customer order 2',
        restaurant: '21',
        restaurantname: 'Test 2 restaurant name',
        totalAmount: 2000,
        restaurantOwner: 'Test 2 restaurant owner',
      },
    ];
    const orderService = jasmine.createSpyObj('OrderService', ['getOrders']);
    getOrdersSpy = orderService.getOrders.and.returnValue(of(orders));

    TestBed.configureTestingModule({
      declarations: [OrdersComponent],
      providers: [{ provide: OrderService, useValue: orderService }],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display orders message', () => {
    fixture.detectChanges(); // -> run ngOnInit

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('h1').textContent).toBe('You have 2 orders');
    expect(getOrdersSpy.calls.any())
      .withContext('getOrdersSpy called')
      .toBe(true);
    expect(getOrdersSpy.calls.count())
      .withContext('getOrdersSpy called only once')
      .toBe(1);
  });

  it('should display total amount', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const ordersTotalAmounts = compiled.querySelectorAll('h3');

    expect(ordersTotalAmounts[0].textContent).toBe(' Total price 10$');
  });

  it('should display meals from orders', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;

    const orderMealsDetails = compiled.querySelectorAll('h4');
    expect(orderMealsDetails.length).toBe(2);

    expect(orderMealsDetails[0].textContent).toBe(' Meal name x1$ ');
    expect(orderMealsDetails[1].textContent).toBe(' Meal 2 name x2$ ');
  });

  it('should display orders', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
  });
});
