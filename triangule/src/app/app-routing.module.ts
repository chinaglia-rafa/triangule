import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsComponent } from './pages/details/details.component';
import { IntroComponent } from './pages/intro/intro.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/intro' },
  { path: 'intro', component: IntroComponent, data: { animation: 'IntroPage' } },
  { path: 'profile', component: ProfileComponent, data: { animation: 'ProfilePage' } },
  { path: 'details', component: DetailsComponent, data: { animation: 'DetailsPage' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  IntroComponent,
  ProfileComponent,
  DetailsComponent
];
