import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-no-commons',
  templateUrl: './no-commons.component.html',
  styles: [
  ]
})
export class NoCommonsComponent implements OnInit {

  public name: string = 'Jorge';
  public gender: string = 'Male';
  public genderMapping: any = {
    'Female': 'woman',
    'Male'  : 'man'
  };
  public customers: any[] = ['Jorge', 'Nattaly', 'Francia', 'Africa'];
  public customerMapping: any = {
    '=0'   : 'no customers',
    '=1'   : '1 customer',
    '=2'   : '2 customers',
    'other': '# customers'
  };
  public techs: string[] = ['Java','Spring','JavaScript','Angular','PHP','Laravel'];
  public userInfo: any = {
    username  : 'jotorres',
    country   : 'Colombia',
    direction : 'Cra 5ta # 25'
  };
  public heroes: any[] = [
    {
      name   : 'Ironman',
      flying : true
    },
    {
      name   : 'Hulk',
      flying : false
    },
    {
      name   : 'Superman',
      flying : true
    }
  ];
  public myObservable: Observable<number> = interval(1000);

  constructor() { }

  ngOnInit(): void {
  }

  public assignName(): void {
    this.name = (this.gender == 'Female') ? 'Nattaly' : 'Jorge';
  }

  public addCustomer(): void {
    this.customers.push(`Customer #${this.customers.length + 1}`);
  }

  public removeCustomer(): void {
    this.customers.pop();
  }

}
