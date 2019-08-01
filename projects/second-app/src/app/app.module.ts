import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
<<<<<<< Updated upstream

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
=======
import {ComponentsModule} from '../../../components/src/lib/components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ComponentsModule],
>>>>>>> Stashed changes
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
