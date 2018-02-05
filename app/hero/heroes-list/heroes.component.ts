import { Component, OnInit } from '@angular/core';
import { RouterExtensions } from "nativescript-angular/router";
import { SearchBar } from "ui/search-bar";
import { ScrollEventData } from "ui/scroll-view";

import { Hero, HeroesViewModel } from '../hero-model/hero';
import { HeroService } from '../hero-services/hero-services';

@Component({
    moduleId: module.id,
    selector: 'ns-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['heroes.component.css']
})

export class HeroesComponent implements OnInit {
    constructor(private heroService: HeroService, private routerExtensions: RouterExtensions) { }

    heroes: Hero[] = [];
    isLoading: boolean = true;
    isSearching: boolean = false;
    current: number = 0;
    ngOnInit() {
        this.getHeroes()
    }

    onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        this.getHeroes(searchBar.text);
    }

    public onScroll(args: ScrollEventData) {
        let scrollY = args.scrollY;
        if (this.current > scrollY) {
            console.log('scroll up');
            this.current = scrollY;
        }
        if (this.current < scrollY) {
            console.log('scroll down');
            this.current = scrollY;
        }
    }

    getHeroes(name?: string) {
        this.heroService.getHeroes(0, name)
            .subscribe(data => {
                this.heroes = data.heros;
            }, error => console.log(error),
            () => {
                this.isLoading = false;
            }
            );
    }

    onSearch() {
        this.isSearching = !this.isSearching;
    }

    onNavigate(id: number) {
        this.routerExtensions.navigate(["/heroes", id], {
            transition: {
                name: "slideRight",
                curve: "easeIn"
            }
        });
    }
}