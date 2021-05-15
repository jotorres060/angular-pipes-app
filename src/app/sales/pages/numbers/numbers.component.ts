import { Component } from '@angular/core';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styles: [
  ]
})
export class NumbersComponent {

  public netSales: number = 2546598.6598;
  public percent: number = 0.4856;

  constructor() { }

}
