import { TestBed } from '@angular/core/testing';
import { Hero } from 'src/app/model/hero';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [HeroService]});
    service = TestBed.inject(HeroService);
  });

  it('get next id works', () => {
    expect(service.getNextId()).toBe(11);
  });

  it('update hero works',()=>{
    var hero = { id: 1, name: "Batman1", creator: "Creator2" };
    service.update(hero);
    expect(service.getById(1)).toEqual({ id: 1, name: "Batman1", creator: "Creator2" });
  });

  it('add hero works',()=>{
    var hero = { id: 0, name: "Test", creator: "CreatorT" };
    service.addHero(hero);
    expect(service.getById(11)).toEqual({ id: 11, name: "Test", creator: "CreatorT" });
  });

  it('get hero works',()=>{    
    expect(service.getById(1)).toEqual({ id: 1, name: "Batman", creator: "Creator1" });
  });

  it('delete hero works',()=>{
    service.deleteHero(1);
    expect(service.getById(1)).toEqual(undefined);
  });
});
