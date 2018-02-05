import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from "rxjs/observable/of";

import { Hero, HeroesViewModel, HeroDetailViewModel } from '../hero-model/hero'



const url = 'https://gateway.marvel.com:443/v1/public/characters';
const security = 'ts=1517104251&apikey=8ba269f53b575b7f50733326f96d8fa1&hash=794d6617e0a86df22980dba6ca304495'; // NO GOOD.....

@Injectable()
export class HeroService {
    constructor(private http: HttpClient) { }

    getHeroes(offset: number, name?: string): Observable<HeroesViewModel> {
        if (name) {
            return this.http.get(`${url}?nameStartsWith=${name}&limit=20&offset=${offset}&${security}`)
                .pipe(
                map(data => data = this.mappingToHeroViewModel(data))
                );
        } else {
            return this.http.get(`${url}?limit=20&offset=${offset}&${security}`)
                .pipe(
                map(data => data = this.mappingToHeroViewModel(data),
                    catchError(error => of(console.log(error)))
                ));
        }

    }

    getHero(id: number): Observable<HeroDetailViewModel> {
        return this.http.get(`${url}/${id}?${security}`)
            .pipe(
            map(data => data = this.mappingToHeroDetailViewModel(data))
            );
    }

    mappingToHeroViewModel(data): HeroesViewModel {
        let results = data['data'].results;
        let herosViewModel: HeroesViewModel;
        let hero: Hero;
        let heros: Hero[] = [];
        for (let item of results) {
            heros.push(hero = {
                id: item.id,
                name: item.name,
                description: item.description,
                image: { path: item.thumbnail.path, extension: item.thumbnail.extension, size: '/portrait_xlarge.' }
            })
        }
        herosViewModel = {
            heros: heros,
            collectionSize: Math.round(data['data'].total / 20)
        }
        return herosViewModel;
    }

    mappingToHeroDetailViewModel(data): HeroDetailViewModel {
        let results = data['data'].results[0];
        let heroDetailViewModel: HeroDetailViewModel;
        let hero: Hero;
        hero = {
            id: results.id,
            name: results.name,
            description: results.description,
            image: {
                path: results.thumbnail.path, extension: results.thumbnail.extension, size: '/portrait_uncanny.'
            }
        }
        heroDetailViewModel = { hero: hero };
        return heroDetailViewModel;

    }

}
