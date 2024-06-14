import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginPageModule)
  },
  
  {
    path: 'creditos',
    loadChildren: () => import('./creditos/creditos.module').then(m => m.CreditosPageModule)
  },
  {
    path: 'feed',
    loadChildren: () => import('./feed/feed.module').then(m => m.FeedPageModule)
  },
  {
    path: 'comparar',
    loadChildren: () => import('./comparar/comparar.module').then(m => m.CompararPageModule)
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then(m => m.FolderPageModule)
  },
  {
    path: 'pokebola',
    loadChildren: () => import('./pokebola/pokebola.module').then(m => m.PokebolaPageModule)
  },
  {
    path: 'pokedex',
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexPageModule)
  },
  {
    path: 'pokemon/:id',
    loadChildren: () => import('./pokemon/pokemon.module').then(m => m.PokemonPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
