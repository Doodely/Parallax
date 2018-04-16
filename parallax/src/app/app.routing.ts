import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { Home } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NotFound } from './components/status/notfound.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: Home },
    { path: 'about', component: AboutComponent },
    { path: '**', component: NotFound }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);