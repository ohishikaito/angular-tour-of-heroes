import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroSerivce: fetched heroes');
    // this.messageService.add('aiueochinchin');
    return of(HEROES);
  }

  constructor(private messageService: MessageService) {}

  getHero(id: number): Observable<Hero> {
    this.messageService.add(`heroService: fetched hero id=${id}`);
    return of(HEROES.find((hero) => hero.id === id));
  }
}
