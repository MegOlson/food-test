import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ZomatoApiCallsService } from '../zomato-api-calls.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ZomatoApiCallsService]
})
export class SearchComponent{
  restaurants: any[];
  constructor(private zomatoApiCallsService: ZomatoApiCallsService) { }

  getRestaurants(city: string, foodType: string) {
    this.zomatoApiCallsService.getByCityAndType(city, foodType).subscribe(response => {
      this.restaurants = response.json().results;
    });
  }
}
