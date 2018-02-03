import { NgModule } from '@angular/core';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";



import { HeroesComponent } from './heroes-list/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroService } from './hero-services/hero-services';


@NgModule({
    imports: [HeroRoutingModule,
        NativeScriptModule
    ],
    exports: [HeroRoutingModule],
    declarations: [
        HeroesComponent,
        HeroDetailComponent],
    providers: [HeroService],
})
export class HeroModule { }
