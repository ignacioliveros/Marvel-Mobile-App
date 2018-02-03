"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var heroes_component_1 = require("./heroes-list/heroes.component");
var hero_detail_component_1 = require("./hero-detail/hero-detail.component");
var hero_routing_module_1 = require("./hero-routing.module");
var hero_services_1 = require("./hero-services/hero-services");
var HeroModule = /** @class */ (function () {
    function HeroModule() {
    }
    HeroModule = __decorate([
        core_1.NgModule({
            imports: [hero_routing_module_1.HeroRoutingModule,
                nativescript_module_1.NativeScriptModule
            ],
            exports: [hero_routing_module_1.HeroRoutingModule],
            declarations: [
                heroes_component_1.HeroesComponent,
                hero_detail_component_1.HeroDetailComponent
            ],
            providers: [hero_services_1.HeroService],
        })
    ], HeroModule);
    return HeroModule;
}());
exports.HeroModule = HeroModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJoZXJvLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUN6QyxnRkFBOEU7QUFJOUUsbUVBQWlFO0FBQ2pFLDZFQUEwRTtBQUMxRSw2REFBMEQ7QUFDMUQsK0RBQTREO0FBYTVEO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFVBQVU7UUFWdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFLENBQUMsdUNBQWlCO2dCQUN2Qix3Q0FBa0I7YUFDckI7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQztZQUM1QixZQUFZLEVBQUU7Z0JBQ1Ysa0NBQWU7Z0JBQ2YsMkNBQW1CO2FBQUM7WUFDeEIsU0FBUyxFQUFFLENBQUMsMkJBQVcsQ0FBQztTQUMzQixDQUFDO09BQ1csVUFBVSxDQUFJO0lBQUQsaUJBQUM7Q0FBQSxBQUEzQixJQUEyQjtBQUFkLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGVcIjtcclxuXHJcblxyXG5cclxuaW1wb3J0IHsgSGVyb2VzQ29tcG9uZW50IH0gZnJvbSAnLi9oZXJvZXMtbGlzdC9oZXJvZXMuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb0RldGFpbENvbXBvbmVudCB9IGZyb20gJy4vaGVyby1kZXRhaWwvaGVyby1kZXRhaWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGVyb1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2hlcm8tcm91dGluZy5tb2R1bGUnO1xyXG5pbXBvcnQgeyBIZXJvU2VydmljZSB9IGZyb20gJy4vaGVyby1zZXJ2aWNlcy9oZXJvLXNlcnZpY2VzJztcclxuXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW0hlcm9Sb3V0aW5nTW9kdWxlLFxyXG4gICAgICAgIE5hdGl2ZVNjcmlwdE1vZHVsZVxyXG4gICAgXSxcclxuICAgIGV4cG9ydHM6IFtIZXJvUm91dGluZ01vZHVsZV0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtcclxuICAgICAgICBIZXJvZXNDb21wb25lbnQsXHJcbiAgICAgICAgSGVyb0RldGFpbENvbXBvbmVudF0sXHJcbiAgICBwcm92aWRlcnM6IFtIZXJvU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBIZXJvTW9kdWxlIHsgfVxyXG4iXX0=