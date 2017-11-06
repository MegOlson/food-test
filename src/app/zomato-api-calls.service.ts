import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as zomato from 'zomato';


@Injectable()
export class ZomatoApiCallsService {

  constructor(private http: Http, private zomato: zomato) { }

  var client = this.zomato.createClient({
    userKey:'275fe207f278addb4f9310c7533554b7',
  });
  // const header = {"User-agent": "curl/7.43.0", "Accept": "application/json", "user_key": "275fe207f278addb4f9310c7533554b7"};

  getCityId(city: string) {
    client.getCities({
      q:city
      }, function(err, result){
          if(!err){
            console.log(result);
          }else {
            console.log(err);
          }
      });
  }

}
