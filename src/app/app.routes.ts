import { Routes } from '@angular/router';

//pages
import { HomePageComponent } from './pages/home.page/home.page.component';
import { DetailsPageComponent } from './pages/details.page/details.page.component';
import { AddGamePageComponent } from './pages/add-game.page/add-game.page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'details/:id', component: DetailsPageComponent },
  { path: 'addGame', component: AddGamePageComponent },
];
