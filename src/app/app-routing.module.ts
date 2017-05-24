import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route } from '@angular/router';
import { Page1Component } from 'app/page1/page1.component';
import { Page2Component } from 'app/page2/page2.component';
import { fallbackRoute } from 'app/shared/fallback-route';

const routes: Routes = [
  { path: '', redirectTo: 'page1', pathMatch: 'full' },
  { path: 'page1', component: Page1Component },
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
