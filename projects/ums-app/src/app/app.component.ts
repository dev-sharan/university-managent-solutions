import { Component } from '@angular/core';
import { Card } from 'ums-lib';
import { assassins } from './assassins';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  cards: Card[] = assassins;
  onCardChange(cards: any) {
    console.log(cards);
  }
}
