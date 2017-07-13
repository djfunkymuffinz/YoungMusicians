import { Component } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [

        query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('0.5s', style({ opacity: 1 }))
          ])
        ])
      ])
    ])
  ]
})
export class HomeComponent {
  content = 'Music stuff.';
  contentCards = [];

  constructor() {
    this.contentCards = [
      {
        title: 'What is the program?',
        image: 'assets/BigDrumBoisWithTone.jpg'
      }, {
        title: 'When is the program?',
        image: 'assets/LowStringyBoi.jpg'
      }, {
        title: 'Moo',
        image: 'assets/BigDrumBoisWithTone.jpg'
      }, {
        title: 'Moo',
        image: 'assets/BigDrumBoisWithTone.jpg'
      }, {
        title: 'Moo',
        image: 'assets/BigDrumBoisWithTone.jpg'
      }
    ]
  }
}
