import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { FilterComponent } from './filter/filter.component';
import { LoginComponent } from './login/login.component';
// import { LogInNavigator } from '../login_navigator';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
 { path: 'login', component: LoginComponent},
{ path: 'home', component: HomeComponent
 // , canLoad: [LogInNavigator]
},
{ path: 'filter', component: FilterComponent
 // , canLoad: [LogInNavigator]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
