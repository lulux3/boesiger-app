import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';

const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: '**', redirectTo: 'home', pathMatch: 'full' }
];

export const routing = RouterModule.forRoot(APP_ROUTES);