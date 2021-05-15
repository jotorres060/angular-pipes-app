import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PrimeNgModule } from '../prime-ng/prime-ng.module';

import { ButtonModule } from 'primeng/button';
import { CommonsComponent } from './pages/commons/commons.component';
import { NoCommonsComponent } from './pages/no-commons/no-commons.component';
import { NumbersComponent } from './pages/numbers/numbers.component';
import { OrderComponent } from './pages/order/order.component';

import { CustomUppercasePipe } from './pipes/custom-uppercase.pipe';
import { FlyPipe } from './pipes/fly.pipe';
import { OrderPipe } from './pipes/order.pipe';

@NgModule({
  declarations: [
    CommonsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent,
    CustomUppercasePipe,
    FlyPipe,
    OrderPipe
  ],
  exports: [
    CommonsComponent,
    NoCommonsComponent,
    NumbersComponent,
    OrderComponent
  ],
  imports: [
    ButtonModule,
    CommonModule,
    FormsModule,
    PrimeNgModule
  ]
})
export class SalesModule { }
