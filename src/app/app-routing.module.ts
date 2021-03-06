import { NgModule } from '@angular/core';
import { Routes, RouterModule, Route, PreloadAllModules } from '@angular/router';
import { Page1Component } from 'app/page1/page1.component';
import { Page2Component } from 'app/page2/page2.component';
import { fallbackRoute } from 'app/shared/fallback-route';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardsComponent } from './cards/cards.component';
import { LoginComponent } from "app/login/login.component";
import { LayoutComponent } from "app/layout/layout.component";
import { LoginGuard } from "app/login.guard";
import { ClassicComponent } from "app/forms/classic/classic.component";
import { ReactiveComponent } from "app/forms/reactive/reactive.component";

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', redirectTo: 'forms/reactive', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'cards/:type', component: CardsComponent, canActivate: [LoginGuard] },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      {
        path: 'forms', children: [
          { path: 'classic', component: ClassicComponent },
          { path: 'reactive', component: ReactiveComponent }
        ]
      },
      { path: 'page1', component: Page1Component, data: { title: 'This is Page 1' } },
      { path: 'page2/sub1/sub2', component: Page2Component }
    ]
  },
  { path: 'login', component: LoginComponent },
  fallbackRoute
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    enableTracing: false,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
