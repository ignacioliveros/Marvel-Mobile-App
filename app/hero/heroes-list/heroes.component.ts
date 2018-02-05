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

    heroes: Hero[] = new Array<Hero>();
    isLoading: boolean = true;
    isSearching: boolean = false;
    currentScrollPoint: number = 0;
    offset: number = 0;
    offsetScrollPoint: number = 1000;
    name: string = '';

    ngOnInit() {
        this.getHeroes()
    }

    onTextChanged(args) {
        let searchBar = <SearchBar>args.object;
        this.name = searchBar.text;
        if (searchBar.text) {
            this.getHeroesByName(searchBar.text);
        } else {
            this.heroes = [];
            this.getHeroes();
        }

    }

    public onScrollPagination(args: ScrollEventData) {
        let scrollY = args.scrollY;
        if (this.currentScrollPoint > scrollY) {    // check if scroll up           
            this.currentScrollPoint = scrollY;
        }
        if (this.currentScrollPoint < scrollY) {    // check if scroll down            
            this.currentScrollPoint = scrollY;
            if (this.currentScrollPoint > this.offsetScrollPoint) {
                this.offsetScrollPoint += 1000;
                this.offset += 20;
                this.isLoading = true;
                this.getHeroes();
            }
        }
    }

    getHeroes() {
        this.heroService.getHeroes(this.offset, this.name)
            .subscribe(data => {
                for (let hero of data.heroes) {
                    this.heroes.push(hero);
                }
            }, error => console.log(error),
            () => {
                this.isLoading = false;
            }
            );
    }

    getHeroesByName(name) {
        if (name) {
            this.offset = 0;
            this.offsetScrollPoint = 1000;
            this.heroService.getHeroes(this.offset, name)
                .subscribe(data => {
                    this.heroes = data.heroes;
                }, error => console.log(error),
                () => {
                    this.isLoading = false;
                }
                );
        }
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