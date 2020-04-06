import { Component } from '@angular/core';

import { products } from '../products';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('sharing', [
      // ...
      state('share', style({
        // height: '200px',
        opacity: 0.3,
        backgroundColor: 'green'
      })),
      state('not-share', style({
        // height: '100px',
        opacity: 1,
        backgroundColor: 'blue'
      })),
      transition('share => not-share', [
        animate('1s')
      ]),
      transition('not-share => share', [
        animate('0.5s')
      ]),
    ]),
  ],
})
export class ProductListComponent {
  products = products;
  isShared = false;

  share(product) {
    product.isShared = !product.isShared;
    this.isShared = !this.isShared;
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/