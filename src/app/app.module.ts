import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ZomatoApiCallsService } from './zomato-api-calls.service';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
