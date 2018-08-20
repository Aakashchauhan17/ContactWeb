import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';

import {FilterComponent} from './filter.component';

export const routes: Routes = [
    { path: '', component: FilterComponent}
];

@NgModule({
    // imports: [Router.forChild(routes)],
    // exports: [Router]

})
export class FilterRoutingModule { }
