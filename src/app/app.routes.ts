import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { MainComponent } from './pages/main/main.component';

export const routes: Routes = [
    {path:'main',component:MainComponent},
    {path:'**', component:NotFoundComponent}
];
 