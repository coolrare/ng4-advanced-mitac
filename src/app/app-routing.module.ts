import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { Page1Component } from 'app/page1/page1.component';
import { Page2Component } from 'app/page2/page2.component';
import { fallbackRoute } from 'app/shared/fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cards', component: CardsComponent },
  { path: 'page1', component: Page1Component, data: { title: 'This is Page 1' } },
  { path: 'page2/sub1/sub2', component: Page2Component },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
