import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { interval } from 'rxjs';


@Component({
  selector: 'app-trade',
  templateUrl: './trade.component.html',
  styleUrls: ['./trade.component.css']
})
export class TradeComponent implements OnInit {

   defaultQty=160;
   userInfo=null;
   loggedIn:boolean= false;
   bankNiftyLtpPrice:String = '';
   callOptionData= null;
   putOptionData= null;
   bankNiftyPosition = null;
   autoRefreshValue:boolean;
    subscribe;
   

  constructor(private loginService: LoginService,
  private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.loggedIn == false) {
    var requestToken = this.route.snapshot.queryParams['request_token'];
    this.loginService.fetchAccessToken(requestToken)
    .subscribe(
      (response)=>{
        this.userInfo = response.json();
       this.loggedIn =true;
       },
      (error)=> console.log(error)

    );
  }

  }

  GetBankNiftyData() {
    
       this.loginService.getBankNiftyData()
       .subscribe(
         (response) =>  {
           var json =  response.json();
           console.log(json);
           console.log(json.instrumentName);
           this.bankNiftyLtpPrice = json.ltpPrice;
           
           this.callOptionData =json.callOptionData;
           this.putOptionData = json.putOptionData; 
           this.bankNiftyPosition = json.bankNiftyPosition;
          },
         (error) => console.log(error)
       );
  
  }

  onSubmit(form:NgForm) {
    this.loginService.placeSellOrder(form.value.callOption,
      form.value.callOptionQty,
      form.value.putOption,
      form.value.putOptionQty).subscribe(
        (response) => {
          console.log(response.json);
        },
        (error) => {
          console.log(error.json);
        }
      );

   
  }

  autoRefreshClicked ()  {
    console.log(this.autoRefreshValue);
    if(this.autoRefreshValue) {
      const source = interval(1500);
      this.subscribe = source.subscribe(val => {
        this.refreshBankNiftyData();
      });
    } else {
      console.log('Auto refresh is switched off');
      this.subscribe.unsubscribe();
    }

  }
  refreshBankNiftyData() {
    
    this.loginService.refreshBankNiftyData(this.bankNiftyLtpPrice)
    .subscribe(
      (response) =>  {
        var json =  response.json();
       // console.log(json);
        //console.log(json.instrumentName);
        this.bankNiftyLtpPrice = json.ltpPrice;
        
        this.callOptionData =json.callOptionData;
        this.putOptionData = json.putOptionData; 
        this.bankNiftyPosition = json.bankNiftyPosition;
       },
      (error) => console.log(error)
    );

}


}
