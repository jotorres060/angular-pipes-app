import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commons',
  templateUrl: './commons.component.html',
  styles: [
  ]
})
export class CommonsComponent implements OnInit {

  public lowerName: string = 'jorge';
  public upperName: string = 'JORGE';
  public fullName: string = 'joRgE tOrReS';
  public currentDate: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
