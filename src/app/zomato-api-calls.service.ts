import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class ZomatoApiCallsService {

  constructor(private http: Http) { }


  getByCityAndType(city: string, foodType) {

    return this.http.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + foodType + '+in+' + city + '&key=AIzaSyDRtGKrhqm1SV38qt4i5tTmgKz7ZIgUCMM')
  }

}
