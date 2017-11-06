import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ZomatoApiCallsService } from './zomato-api-calls.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';
import { RestaurantListComponent } from './restaurant-list/restaurant-list.component';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    RestaurantListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGSdrAlnmRxGQwhSe5y3oxUp5lxQr2s_I'
    }),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
