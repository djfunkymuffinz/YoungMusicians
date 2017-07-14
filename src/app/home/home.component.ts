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
    trigger('listAnimation',[
      transition('* => *', [
        query('md-card', style({
          opacity: 0,
          transform: 'translateY(50px)'
        }), {optional: true}),
        query('md-card', [
          stagger('100ms', [
            animate('500ms ease-out', style({
              opacity: 1,
              transform: 'translateY(0)'
            }))
          ])
        ], { optional: true }),
      ]),
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
