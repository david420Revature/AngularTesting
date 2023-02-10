import { Component } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {
  numbers: Array<number> = Array(52).map((x, i) => i); // this is ridiculous, there must be some way to do a simple for loop...
  id: string = "hello";
}
