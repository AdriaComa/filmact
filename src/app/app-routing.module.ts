import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FilmsComponent } from './films/films.component';
import { ActorsComponent } from './actors/actors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'peliculas', component: FilmsComponent },
  { path: 'actores', component: ActorsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
