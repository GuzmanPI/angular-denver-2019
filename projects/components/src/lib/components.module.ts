import { NgModule } from "@angular/core";
import { ComponentsComponent } from "./components.component";
import {GeoEntitiesComponent} from './geo-entities/geo-entities.component';
import {GeoDataDirective} from './geo-entities/directive/geo-data.directive';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {GeoDataService} from './geo-entities/directive/service/geo-data.service';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [ComponentsComponent, GeoEntitiesComponent, GeoDataDirective],
  imports: [ BrowserModule, FormsModule, HttpClientModule, DragDropModule],
  providers: [GeoDataService],
  exports: [ComponentsComponent, GeoEntitiesComponent]

})
export class ComponentsModule {}
