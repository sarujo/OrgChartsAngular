import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { OrgChartsPageComponent } from './components/org-charts-page/org-charts-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'orgCharts', component: OrgChartsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
