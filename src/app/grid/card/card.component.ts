import { Component, Input } from '@angular/core';
import { test } from '../../service';

@Component({
  selector: 'grid-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() deck_id?: string;
  terp: string = test

}
