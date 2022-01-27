import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AnimeComponent } from './anime/anime.component';
import { MangaComponent } from './manga/manga.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    AnimeComponent,
    MangaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
