import { Routes } from '@angular/router';

//pages
import { HomePageComponent } from './pages/home.page/home.page.component';
import { DetailsPageComponent } from './pages/details.page/details.page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'details/', component: HomePageComponent }
];
