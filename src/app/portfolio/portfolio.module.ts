import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { provideRouter } from '@angular/router';
import { routes } from '../app.routes';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ],
  providers: [
    provideRouter(routes)
  ]
})
export class PortfolioModule { }
