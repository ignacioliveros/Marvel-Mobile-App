"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
require("rxjs/add/operator/switchMap");
var hero_services_1 = require("../hero-services/hero-services");
var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent(pageRoute, heroService) {
        this.pageRoute = pageRoute;
        this.heroService = heroService;
        this.isLoading = true;
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute
            .switchMap(function (activatedRoute) { return activatedRoute.params; })
            .forEach(function (params) { _this.id = +params["id"]; });
        this.getHero(this.id);
    };
    HeroDetailComponent.prototype.getHero = function (id) {
        var _this = this;
        this.heroService.getHero(id)
            .subscribe(function (data) {
            _this.hero = data.hero;
            _this.isLoading = false;
        });
    };
    HeroDetailComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-hero-detail',
            templateUrl: './hero-detail.component.html'
        }),
        __metadata("design:paramtypes", [router_1.PageRoute, hero_services_1.HeroService])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());
exports.HeroDetailComponent = HeroDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1kZXRhaWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaGVyby1kZXRhaWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUF3RDtBQUN4RCx1Q0FBcUM7QUFFckMsZ0VBQTZEO0FBUzdEO0lBTUksNkJBQW9CLFNBQW9CLEVBQVUsV0FBd0I7UUFBdEQsY0FBUyxHQUFULFNBQVMsQ0FBVztRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRjFFLGNBQVMsR0FBWSxJQUFJLENBQUM7SUFJMUIsQ0FBQztJQUVELHNDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYzthQUN4QixTQUFTLENBQUMsVUFBQSxjQUFjLElBQUksT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDO2FBQ2xELE9BQU8sQ0FBQyxVQUFDLE1BQU0sSUFBTyxLQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELHFDQUFPLEdBQVAsVUFBUSxFQUFVO1FBQWxCLGlCQU1DO1FBTEcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO2FBQ3ZCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDWCxLQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdEIsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBdkJRLG1CQUFtQjtRQU4vQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIsV0FBVyxFQUFFLDhCQUE4QjtTQUM5QyxDQUFDO3lDQVFpQyxrQkFBUyxFQUF1QiwyQkFBVztPQU5qRSxtQkFBbUIsQ0F3Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQXhCRCxJQXdCQztBQXhCWSxrREFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBQYWdlUm91dGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCBcInJ4anMvYWRkL29wZXJhdG9yL3N3aXRjaE1hcFwiO1xyXG5cclxuaW1wb3J0IHsgSGVyb1NlcnZpY2UgfSBmcm9tICcuLi9oZXJvLXNlcnZpY2VzL2hlcm8tc2VydmljZXMnO1xyXG5pbXBvcnQgeyBIZXJvIH0gZnJvbSAnLi4vaGVyby1tb2RlbC9oZXJvJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbnMtaGVyby1kZXRhaWwnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2hlcm8tZGV0YWlsLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEhlcm9EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAgIGhlcm86IEhlcm87XHJcbiAgICBpZDogbnVtYmVyO1xyXG4gICAgaXNMb2FkaW5nOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2VSb3V0ZTogUGFnZVJvdXRlLCBwcml2YXRlIGhlcm9TZXJ2aWNlOiBIZXJvU2VydmljZSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnBhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxyXG4gICAgICAgICAgICAuc3dpdGNoTWFwKGFjdGl2YXRlZFJvdXRlID0+IGFjdGl2YXRlZFJvdXRlLnBhcmFtcylcclxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4geyB0aGlzLmlkID0gK3BhcmFtc1tcImlkXCJdOyB9KTtcclxuICAgICAgICB0aGlzLmdldEhlcm8odGhpcy5pZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVybyhpZDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5oZXJvU2VydmljZS5nZXRIZXJvKGlkKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oZXJvID0gZGF0YS5oZXJvO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcbn0iXX0=