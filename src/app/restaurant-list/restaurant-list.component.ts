import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurant-list',
  templateUrl: './restaurant-list.component.html',
  styleUrls: ['./restaurant-list.component.css'],
  providers: [ ]
})
export class RestaurantListComponent{
  @Input() childRestaurants;

  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }
}
