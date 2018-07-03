import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TradeComponent } from './trade/trade.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
  { path: 'trade', component: TradeComponent },
  { path: 'test', component: TestComponent }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
