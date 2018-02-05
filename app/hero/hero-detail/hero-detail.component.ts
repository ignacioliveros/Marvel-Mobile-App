import { Component, OnInit } from '@angular/core';
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import * as enums from 'ui/enums'
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

    constructor(private pageRoute: PageRoute, private heroService: HeroService, private routerExtensions: RouterExtensions) {

    }

    ngOnInit() {
        this.pageRoute.activatedRoute
            .switchMap(activatedRoute => activatedRoute.params)
            .forEach((params) => { this.id = +params["id"]; });
        this.isLoading = true;
        this.getHero(this.id);

    }

    onBack() {
        this.routerExtensions.navigate(["/heroes"], {
            transition: {
                name: "slideLeft",
                curve: enums.AnimationCurve.easeIn
            }
        });
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