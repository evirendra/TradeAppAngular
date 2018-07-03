import { Injectable } from "@angular/core";
import { Http, Headers } from '@angular/http'

@Injectable()
export class LoginService {


  updateExitCache(bankNiftyUpperThreshHold: String, bankNiftyLowerThreshHold: String,
    callOptionSymbol:String, callOptionQty:String,putOptionSymbol:String,putOptionQty:String,
    optionTotalUpper:String, optionTotalLower:String,exitAtCallOption:String, exitAtPutOption:String,
    exitActionEnabled:boolean, testMode:boolean): any {

    var parmaterString = "bankNiftyUpperThreshHold="+bankNiftyUpperThreshHold + "&bankNiftyLowerThreshHold=" + bankNiftyLowerThreshHold
                    +"&callOptionSymbol=" + callOptionSymbol + "&callOptionQty=" +callOptionQty 
                    +"&putOptionSymbol=" + putOptionSymbol + "&putOptionQty="+putOptionQty
                    +"&optionTotalUpper=" +optionTotalUpper + "&optionTotalLower="+optionTotalLower 
                    +"&exitAtCallOption="+exitAtCallOption +"&exitAtPutOption="+exitAtPutOption
                    +"&exitActionEnabled=" + exitActionEnabled + "&testMode=" +testMode ; 
    return this.http.get("http://localhost:8080/api/updateExitCache?" +parmaterString )
   
  }


 

  
    constructor(private http: Http) {}

    tryLogin() {
        
       return  this.http.get("http://localhost:8080/api/hello");
    }

    fetchAccessToken(requestToken:String) {
        return this.http.get("http://localhost:8080/api/home?request_token="+requestToken);
    }

    getBankNiftyData() {
        return this.http.get("http://localhost:8080/api/bankNiftyData");
    }
    

    refreshBankNiftyData(bankNiftyLtpPrice:String) {
        var parmaterString = "bankNiftyLtpPrice="+bankNiftyLtpPrice;
        return this.http.get("http://localhost:8080/api/refreshBankNiftyData?" + parmaterString);
    }

    placeSellOrder(callOptionSymbol:String,callOptionQty:String,putOptionSymbol:String, putOptionQty:String  ) {
        var parmaterString = "callOptionSymbol="+callOptionSymbol + "&callOptionQty=" + callOptionQty 
        + "&putOptionSymbol=" + putOptionSymbol + "&putOptionQty=" + putOptionQty;
        return this.http.get("http://localhost:8080/api/options/sell?" +parmaterString );
    }

}