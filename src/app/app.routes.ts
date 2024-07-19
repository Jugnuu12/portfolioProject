import { Routes } from '@angular/router';
import { HomeComponent } from './portfolio/home/home.component';

export const routes: Routes = [
    { path: '', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule) },
    { path: '**', redirectTo: '' },
];
