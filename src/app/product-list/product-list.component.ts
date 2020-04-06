import { Component } from '@angular/core';

import { products } from '../products';
import { trigger, state, style, transition, animate, AnimationEvent, useAnimation } from '@angular/animations';
import { transAnimation, slideInAnimation } from '../animations';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  animations: [
    trigger('sharing', [
      // ...
      state('share', style({
        // height: '200px',
        opacity: 1,
        backgroundColor: 'green'
      })),
      state('not-share', style({
        // height: '100px',
        opacity: 1,
        backgroundColor: 'orange'
      })),
      // transition('share => not-share', [
      //   animate('4s')
      // ]),
      transition('not-share => share', [
        animate('3s')
      ]),
      transition('share => not-share', [
        animate('1s',
          style({
            opacity: '*',
            backgroundColor: 'red',
            height: '200px',
          }),
        ),
      ]),
    ]),
    trigger('notify', [
      transition('false <=> true', [
        useAnimation(transAnimation, {
          params: {
            height: 0,
            opacity: 1,
            backgroundColor: 'red',
            time: '10s'
          }
        })
      ])
    ]),
    slideInAnimation,
  ],
})
export class ProductListComponent {
  products = products;
  isShared = false;

  onAnimationEvent(event: AnimationEvent) {
    console.log(`Animation ${event.triggerName} ${event.phaseName} : from ${event.fromState} to ${event.toState}`);
  }

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