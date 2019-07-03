import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartsPageComponent } from './components/org-charts-page/org-charts-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { OrgDataInputComponent } from './components/org-data-input/org-data-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { OrgChartComponent } from './components/org-chart/org-chart.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgChartsPageComponent,
    HomePageComponent,
    OrgDataInputComponent,
    OrgChartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleChartsModule.forRoot(),
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
