import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { JikanService } from '../searchbar/jikan.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-anime',
  templateUrl: './anime.component.html',
  styleUrls: ['./anime.component.css']
})
export class AnimeComponent implements OnInit {
  
  anime: any;
  animeList: any;


  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  
  }

getTopAnime(anime:any){
  this.http.get('https://api.jikan.moe/v4/top/anime')
  .subscribe((response) => {
    console.log(response);
    this.animeList = response;
  });

}
}
