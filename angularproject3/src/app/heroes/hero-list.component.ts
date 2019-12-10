import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
  styleUrls: ['./hero-list.component.css']
})
export class HeroListComponent implements OnInit {

  herolist:any=[
    {
      'heroId':101,
      'heroName':'Green Arrow'
    },
    {
      'heroId':102,
      'heroName':'The Flash'
    },
    {
      'heroId':103,
      'heroName':'Supergirl'
    },
    {
      'heroId':104,
      'heroName':'Bat Woman'
    },
    {
      'heroId':105,
      'heroName':'White Canary'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  selectedHeroObj:any;
  onSelect(selectedObj:any){
    
    this.selectedHeroObj=selectedObj;
  }

}
