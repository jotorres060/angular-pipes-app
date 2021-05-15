import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommonsComponent } from './sales/pages/commons/commons.component';
import { NoCommonsComponent } from './sales/pages/no-commons/no-commons.component';
import { NumbersComponent } from './sales/pages/numbers/numbers.component';
import { OrderComponent } from './sales/pages/order/order.component';

const routes: Routes = [
  {
    path: 'commons',
    pathMatch: 'full',
    component: CommonsComponent
  },
  {
    path: 'no-commons',
    component: NoCommonsComponent
  },
  {
    path: 'numbers',
    component: NumbersComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '**',
    redirectTo: 'commons'
  }
];

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
