import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

import {GeoDataService} from './service/geo-data.service';
import {Country, State, City} from '../../data-models/geo-entities.model';

export interface GeoDataContext {
  $implicit: any;
}

interface GeoEntity {
  countryIsoCode?: string;
  stateName?: string;
  type: string;
}
@Directive({
  selector: '[appGeoData]'
})
export class GeoDataDirective {
  constructor(private viewContainerRef: ViewContainerRef,
              private templateRef: TemplateRef<GeoDataContext>,
              private geoDataService: GeoDataService) {
  }

  @Input()
  set appGeoData(geoEntity: GeoEntity) {
    if (geoEntity.type === 'country') {
      this.loadAllCountries();
    } else if (geoEntity.type === 'state') {
      this.loadAllStatesByCountryCode(geoEntity.countryIsoCode);
    } else {
      this.loadAllCitiesByStateName(geoEntity.countryIsoCode, geoEntity.stateName);
    }
  }

  /** Loads all countries. */
  private loadAllCountries(): void {
    this.geoDataService.getAllCountries()
      .then((countries: Country[]) => {
        this.createEmbeddedView(countries);
      });
  }

  private loadAllStatesByCountryCode(countryIsoCode: string): void {
    this.geoDataService.getAllStatesByCountryCode(countryIsoCode)
      .then((states: State[]) => {
        this.createEmbeddedView(states);
      });
  }

  private loadAllCitiesByStateName(countryIsoCode: string, stateName: string): void {
    this.geoDataService.getAllCitiesByStateName(countryIsoCode, stateName)
      .then((cities: City[]) => {
        this.createEmbeddedView(cities);
      });
  }

  private createEmbeddedView<T>(geoEntities: T[]): void {
    geoEntities.forEach(entity => {
      this.viewContainerRef.createEmbeddedView(this.templateRef, {$implicit: entity});
    });
  }
}
