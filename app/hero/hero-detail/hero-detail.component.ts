import { Component, OnInit } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { HeroService } from '../hero-services/hero-services';
import { Hero } from '../hero-model/hero';

@Component({
    moduleId: module.id,
    selector: 'ns-hero-detail',
    templateUrl: './hero-detail.component.html'
})

export class HeroDetailComponent implements OnInit {

    hero: Hero;
    id: number;
    isLoading: boolean = true;

    constructor(private pageRoute: PageRoute, private heroService: HeroService) {

    }

    ngOnInit() {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => { this.id = +params["id"]; });
        this.getHero(this.id);
    }

    getHero(id: number) {
        this.heroService.getHero(id)
            .subscribe(data => {
                this.hero = data.hero;
                this.isLoading = false;
            });
    }
}