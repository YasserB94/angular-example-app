import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  constructor() {}
  @Output() notify = new EventEmitter();
  @Input() product!: Product | undefined;

  test() {
    window.alert('The product has been shared!');
  }
}
