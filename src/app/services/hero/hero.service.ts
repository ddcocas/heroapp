import { Injectable, OnInit } from '@angular/core';
import { Hero } from '../../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroes: Array<Hero>;
  constructor() {
    this.heroes = [
      { id: 1, name: "Batman", creator: "Creator1" },
      { id: 2, name: "Spiderman", creator: "Creator2" },
      { id: 3, name: "Elektra", creator: "Creator3" },
      { id: 4, name: "Hulk", creator: "Creator1" },
      { id: 5, name: "Flash", creator: "Creator2" },
      { id: 6, name: "Ironman", creator: "Creator3" },
      { id: 7, name: "Antman", creator: "Creator1" },
      { id: 8, name: "Stone", creator: "Creator2" },
      { id: 9, name: "Storm", creator: "Creator3" },
      { id: 10, name: "Wolverin", creator: "Creator1" }
    ];

  }

  async getAll(): Promise<Array<Hero>> {
    return this.heroes;
  }

  addHero(hero: Hero) {
    hero.id = this.getNextId();
    this.heroes.push(hero);
  }

  getNextId(): number {
    var sorted = this.heroes.sort((a, b) => a.id - b.id);
    return sorted[sorted.length - 1].id + 1;
  }

  update(hero: Hero) {
    var arrayhero = this.heroes.find(_ => _.id == hero.id);
    if (arrayhero) {
      arrayhero.name = hero.name;
      arrayhero.creator = hero.creator;
    }
  }

  getById(heroId: number) {
    return this.heroes.find(_ => _.id == heroId);
  }

  deleteHero(id: number) {
    this.heroes = this.heroes.filter(_ => _.id != id);
  }

}
