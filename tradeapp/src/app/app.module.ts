import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { TradeComponent } from './trade/trade.component';
import { TestComponent } from './test/test.component';
import { LoginService } from './trade/login.service';
import { HttpModule } from '@angular/http';
import {FormsModule} from '@angular/forms';
import { ExitComponent } from './exit/exit.component';

@NgModule({
  declarations: [
    AppComponent,
    TradeComponent,
    TestComponent,
    ExitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
