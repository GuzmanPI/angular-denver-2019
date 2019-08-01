import { Component } from "@angular/core";
<<<<<<< Updated upstream
=======
import {City, Country, State} from '../../../components/src/lib/data-models/geo-entities.model';
>>>>>>> Stashed changes

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
<<<<<<< Updated upstream
  title = "second-app";
=======
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
>>>>>>> Stashed changes
}
