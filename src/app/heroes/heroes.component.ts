import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
// import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero;
  heroes: Hero[];
  // hero = 'Windstorm';
  hero: Hero = {
    id: 1,
    name: 'Windstorm',
  };
  constructor(
    private heroService: HeroService,
    private messageSerivce: MessageService
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageSerivce.add(`HeroesComponent: Selected hero id=${hero.id}`);
    // console.log('aaa');
  }

  // heroes = HEROES;
  getHeroes(): void {
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
    // this.heroes = this.heroService.getHeroes()
  }
}
