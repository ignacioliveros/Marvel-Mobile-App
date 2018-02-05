export interface Hero {
    id: number;
    name: string;
    description: string;
    image: Image
}

export interface Image {
    path: string;
    extension: string;
    size: string
}

export interface HeroesViewModel {
    heroes: Hero[];
    collectionSize: number;
}

export interface HeroDetailViewModel {
    hero: Hero;
}
