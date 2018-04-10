import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { DapartmentAComponent } from './dapartment-a/dapartment-a.component';
import { DapartmentBComponent } from './dapartment-b/dapartment-b.component';
import { DapartmentCComponent } from './dapartment-c/dapartment-c.component';
import { DapartmentDComponent } from './dapartment-d/dapartment-d.component';
import { DapartmentEComponent } from './dapartment-e/dapartment-e.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    DapartmentAComponent,
    DapartmentBComponent,
    DapartmentCComponent,
    DapartmentDComponent,
    DapartmentEComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
