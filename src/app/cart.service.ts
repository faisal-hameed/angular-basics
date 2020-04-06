import { Injectable } from '@angular/core';

@Injectable()
export class CartService {
  items = [];
  constructor() { }

  addToCart(product) {
    console.log('addToCart', JSON.stringify(product));
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}