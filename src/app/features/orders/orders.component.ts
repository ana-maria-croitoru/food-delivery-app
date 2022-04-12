import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/core/interfaces/order';
import { OrderService } from 'src/app/core/services/order.service';

@Component({
  selector: 'orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss'],
})
export class OrdersComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  orderSubscription: Subscription;
  constructor(private orderService: OrderService) {}
  getOrders(): void {
    this.orderSubscription = this.orderService
      .getOrders()
      .subscribe((orders) => {
        this.orders = orders;
      });
  }
  ngOnInit(): void {
    this.getOrders();
  }

  ngOnDestroy(): void {
    this.orderSubscription.unsubscribe();
  }
}
