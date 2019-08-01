import { Component } from "@angular/core";
import {City, Country, State} from '../../../components/src/lib/data-models/geo-entities.model';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  country: Country;
  state: State;
  city: City;

  selectCountry(country: Country): void {
    this.country = country;
  }

  selectState(state: State): void {
    this.state = state;
  }

  selectCity(city: City): void {
    this.city = city;
  }
}
