import { Component } from '@angular/core';
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  state,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('listAnimation',[
      transition(':enter', [
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
    ]),
    trigger('drawerAnimation', [
      state('closed', style({
        height: '0'
      })),
      state('open', style({
        height: '200px'
      })),
      transition('closed <=> open',
        animate('500ms ease'))
    ]),
    trigger('drawerContainerAnimation', [
      state('in', style({transform: 'translateX(0)', opacity: 1})),
      transition('void => in', [
        style({transform: 'translateX(-50%)', opacity: 0}),
        animate('300ms ease-out')
      ]),
      transition('in => void', [
        animate('300ms ease-in', style({transform: 'translateX(50%)', opacity: 0}))
      ])
    ])
  ]
})
export class HomeComponent {
  contentCards = [{
    id: '1',
    title: 'What is the program?',
    image: 'assets/BigDrumBoisWithTone.jpg',
    state: 'in',
    content: 'The Young Musicians Summer Academy is a unique summer camp designed to offer musical enrichment to middle and high school students through musical workshops, lessons, and performance opportunities with guest artist faculty. '
  }, {
    id: '2',
    title: 'When is the program?',
    image: 'assets/LowStringyBoi.jpg',
    state: 'in',
    content: `June 27-29, 2017@ North Caroline High School
Download the Application or Click Here to Register Online
Especially designed for standard band & orchestra instrumentalists, incoming 6th–12th grades.
Final performance will be at 3:30 on Thursday in the auditorium.
The public is welcome!`
  }, {
    id: '3',
    title: 'Moo',
    image: 'assets/BigDrumBoisWithTone.jpg',
    state: 'in',
    content: 'filler'
  }, {
    id: '4',
    title: 'Moo',
    image: 'assets/BigDrumBoisWithTone.jpg',
    state: 'in',
    content: 'filler'
  }, {
    id: '5',
    title: 'Moo',
    image: 'assets/BigDrumBoisWithTone.jpg',
    state: 'in',
    content: 'filler'
  }];
  drawerState = 'closed';
  selectedCards = [];
  nextCard = null;

  drawerContainerAnimationDone($event) {
    if($event.toState === 'void' && this.nextCard !== null) {
      this.selectedCards.push(this.nextCard);
      this.nextCard = null;
    }
    console.log(this.selectedCards);
  }

  toggleDrawer(card) {
    if(this.selectedCards.length === 0) {
      this.selectedCards.push(card);
      this.drawerState = 'open';
    } else if(this.selectedCards[0].id === card.id) {
      this.selectedCards.pop();
      this.drawerState = 'closed';
    } else {
      this.selectedCards.pop();
      this.nextCard = card;
    }
  }

  constructor() {
  }
}
