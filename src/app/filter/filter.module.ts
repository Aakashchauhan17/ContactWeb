import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FilterComponent} from './filter.component';
import {FilterRoutingModule} from './filter.routes';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FilterRoutingModule,
    HttpClientModule
  ],
  declarations: [FilterComponent],
  schemas : [NO_ERRORS_SCHEMA]
})
export class FilterModule {
}
