import { Component, OnInit } from '@angular/core';
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

import { HeroService } from '../hero-services/hero-services';
import { Hero } from '../hero-model/hero';

@Component({
    moduleId: module.id,
    selector: 'ns-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.css']
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
        this.isLoading = true;
        this.getHero(this.id);

    }

    getHero(id: number) {
        this.heroService.getHero(id)
            .subscribe(data => {
                this.hero = data.hero;
            }, error => console.log(error),
            () => {
                this.isLoading = false;
            });
    }
}