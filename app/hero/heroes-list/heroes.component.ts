import { Component, OnInit } from '@angular/core';

import { Hero, HeroesViewModel } from '../hero-model/hero';
import { HeroService } from '../hero-services/hero-services';

@Component({
    moduleId: module.id,
    selector: 'ns-heroes',
    templateUrl: './heroes.component.html'
})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService) { }

    heroes: Hero[] = [];
    ngOnInit() {
        this.getHeroes()
    }

    getHeroes() {
        this.heroService.getHeros(20)
            .subscribe(data => this.heroes = data.heros);
    }
}