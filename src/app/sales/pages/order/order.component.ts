import { Component, OnInit } from '@angular/core';

import { Color, Hero } from '../../interfaces/sales.interfaces';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styles: [
  ]
})
export class OrderComponent implements OnInit {

  public isUppercase: boolean = false;
  public orderBy: string = '';
  public heroes: Hero[] = [
    {
      name : 'Superman',
      fly  : true,
      color: Color.blue
    },
    {
      name : 'Batman',
      fly  : false,
      color: Color.black
    },
    {
      name : 'Robin',
      fly  : false,
      color: Color.green
    },
    {
      name : 'Daredevil',
      fly  : false,
      color: Color.red
    },
    {
      name : 'Green Lantern',
      fly  : true,
      color: Color.green
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  public toggleUppercase(): void {
    this.isUppercase = !this.isUppercase;
  }

  public changeOrder(value: string): void {
    this.orderBy = value;
  }

}
