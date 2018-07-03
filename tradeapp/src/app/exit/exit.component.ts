import { Component, OnInit } from '@angular/core';
import { LoginService } from '../trade/login.service';

@Component({
  selector: 'app-exit',
  templateUrl: './exit.component.html',
  styleUrls: ['./exit.component.css']
})
export class ExitComponent implements OnInit {

  bankNiftyUpperThreshHold;
  bankNiftyLowerThreshHold;
  callOptionSymbol;
  callOptionQty;
  putOptionSymbol;
  putOptionQty;
  optionTotalUpper;
  optionTotalLower;
  exitAtCallOption;
  exitAtPutOption;
  testMode:boolean=false;
  exitActionEnabled:boolean=true;

  
  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  setExitCond() {

    console.log(this.bankNiftyLowerThreshHold);
    console.log(this.bankNiftyUpperThreshHold);
    console.log(this.callOptionSymbol);
    console.log(this.callOptionQty);
    console.log(this.putOptionSymbol);
    console.log(this.putOptionQty);
    console.log(this.optionTotalUpper);
    console.log(this.optionTotalLower);
    console.log(this.exitAtCallOption);
    console.log(this.exitAtPutOption);
    console.log(this.testMode);
    console.log(this.exitActionEnabled);

     this.loginService.updateExitCache(this.bankNiftyUpperThreshHold,
      this.bankNiftyLowerThreshHold, this.callOptionSymbol, this.callOptionQty,
    this.putOptionSymbol, this.putOptionQty, this.optionTotalUpper, this.optionTotalLower,
  this.exitAtCallOption, this.exitAtPutOption, this.exitActionEnabled, this.testMode).subscribe(
        (response) => {
          console.log(response.json);
        },
        (error) => {
          console.log(error.json);
        }
      );

  }

}
