import { NgModule } from '@angular/core';


import { AnimeComponent } from './anime/anime.component';
import { MangaComponent } from './manga/manga.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
      path: 'anime',
      component: AnimeComponent
  },
  {
      path: 'manga',
      component: MangaComponent
  },

  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }