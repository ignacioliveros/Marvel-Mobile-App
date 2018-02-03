"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var hero_services_1 = require("../hero-services/hero-services");
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
        this.heroes = [];
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeros(20)
            .subscribe(function (data) { return _this.heroes = data.heros; });
    };
    HeroesComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'ns-heroes',
            templateUrl: './heroes.component.html'
        }),
        __metadata("design:paramtypes", [hero_services_1.HeroService])
    ], HeroesComponent);
    return HeroesComponent;
}());
exports.HeroesComponent = HeroesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyb2VzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlcm9lcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFHbEQsZ0VBQTZEO0FBUTdEO0lBQ0kseUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRTVDLFdBQU0sR0FBVyxFQUFFLENBQUM7SUFGNEIsQ0FBQztJQUdqRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFBO0lBQ3BCLENBQUM7SUFFRCxtQ0FBUyxHQUFUO1FBQUEsaUJBR0M7UUFGRyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7YUFDeEIsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxFQUF4QixDQUF3QixDQUFDLENBQUM7SUFDckQsQ0FBQztJQVhRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixRQUFRLEVBQUUsV0FBVztZQUNyQixXQUFXLEVBQUUseUJBQXlCO1NBQ3pDLENBQUM7eUNBR21DLDJCQUFXO09BRG5DLGVBQWUsQ0FZM0I7SUFBRCxzQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEhlcm8sIEhlcm9lc1ZpZXdNb2RlbCB9IGZyb20gJy4uL2hlcm8tbW9kZWwvaGVybyc7XHJcbmltcG9ydCB7IEhlcm9TZXJ2aWNlIH0gZnJvbSAnLi4vaGVyby1zZXJ2aWNlcy9oZXJvLXNlcnZpY2VzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICAgIHNlbGVjdG9yOiAnbnMtaGVyb2VzJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9oZXJvZXMuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgSGVyb2VzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaGVyb1NlcnZpY2U6IEhlcm9TZXJ2aWNlKSB7IH1cclxuXHJcbiAgICBoZXJvZXM6IEhlcm9bXSA9IFtdO1xyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRIZXJvZXMoKVxyXG4gICAgfVxyXG5cclxuICAgIGdldEhlcm9lcygpIHtcclxuICAgICAgICB0aGlzLmhlcm9TZXJ2aWNlLmdldEhlcm9zKDIwKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5oZXJvZXMgPSBkYXRhLmhlcm9zKTtcclxuICAgIH1cclxufSJdfQ==