import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/Forms';
import { OrdersService } from '../shared/orders.service';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  constructor(private ordersService:OrdersService) { }

  ngOnInit() {
  }

  coffees = ["American", "Flat White", "Cappuccino", "Latte",
  "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea", "Drip Coffee"];
  
  coffeeOrder = [];
  
  addCoffee = coffee => this.coffeeOrder.push(coffee);

  removeCoffee = coffee => {
    let index = this.coffeeOrder.indexOf(coffee);
    if (index > -1) this.coffeeOrder.splice(index,1);
  };

  onSubmit() {
    this.ordersService.form.value.coffeeOrder = this.coffeeOrder;
    let data = this.ordersService.form.value;

    this.ordersService.createCoffeeOrder(data)
    .then(res => {
      
    });
  }
}
