import { Component, OnInit } from '@angular/core';
import { ZomatoApiCallsService } from '../zomato-api-calls.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  providers: [ZomatoApiCallsService]
})
export class SearchComponent implements OnInit {

  constructor(private zomatoApiCallsService: ZomatoApiCallsService) { }

  ngOnInit() {
  }

  cityId(city: string, foodType: string) {
    console.log(this.zomatoApiCallsService.getRestaurants(city, foodType));
  }

}
