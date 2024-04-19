import { Routes } from '@angular/router';
import { HomeComponent } from './modules/portifolio/pages/home/home.component';
import { JsgamepageComponent } from './modules/portifolio/pages/jsgamepage/jsgamepage.component';

export const routes: Routes = [
    {path: '',component: HomeComponent},
    {path: 'jsgamepage',component: JsgamepageComponent}
];
