import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { AppCustomPreloader } from './app-routing-loader';

const routes: Routes = [
  // { path: 'filter', loadChildren: './filter/filter.module#FilterModule'}
{ path: 'filter', component: FilterComponent , data: {preload: true}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppCustomPreloader})],
  exports: [RouterModule],
  providers: [AppCustomPreloader];
})
export class AppRoutingModule { }
