"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var operators_1 = require("rxjs/operators");
var of_1 = require("rxjs/observable/of");
var url = 'https://gateway.marvel.com:443/v1/public/characters';
var security = 'ts=1517104251&apikey=8ba269f53b575b7f50733326f96d8fa1&hash=794d6617e0a86df22980dba6ca304495'; // NO GOOD.....
var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.getHeros = function (offset, name) {
        var _this = this;
        if (name) {
            return this.http.get(url + "?nameStartsWith=" + name + "&limit=20&offset=" + offset + "&" + security)
                .pipe(operators_1.map(function (data) { return data = _this.mappingToHeroViewModel(data); }));
        }
        else {
            return this.http.get(url + "?limit=20&offset=" + offset + "&" + security)
                .pipe(operators_1.map(function (data) { return data = _this.mappingToHeroViewModel(data); }, operators_1.catchError(function (error) { return of_1.of(console.log('aca')); })));
        }
    };
    HeroService.prototype.getHero = function (id) {
        var _this = this;
        return this.http.get(url + "/" + id + "?" + security)
            .pipe(operators_1.map(function (data) { return data = _this.mappingToHeroDetailViewModel(data); }));
    };
    HeroService.prototype.mappingToHeroViewModel = function (data) {
        var results = data['data'].results;
        var herosViewModel;
        var hero;
        var heros = [];
        for (var _i = 0, results_1 = results; _i < results_1.length; _i++) {
            var item = results_1[_i];
            heros.push(hero = {
                id: item.id,
                name: item.name,
                description: item.description,
                image: { path: item.thumbnail.path, extension: item.thumbnail.extension, size: '/portrait_xlarge.' }
            });
        }
        herosViewModel = {
            heros: heros,
            collectionSize: Math.round(data['data'].total / 20)
        };
        return herosViewModel;
    };
    HeroService.prototype.mappingToHeroDetailViewModel = function (data) {
        var results = data['data'].results[0];
        var heroDetailViewModel;
        var hero;
        hero = {
            id: results.id,
            name: results.name,
            description: results.description,
            image: {
                path: results.thumbnail.path, extension: results.thumbnail.extension, size: '/portrait_uncanny.'
            }
        };
        heroDetailViewModel = { hero: hero };
        return heroDetailViewModel;
    };
    HeroService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], HeroService);
    return HeroService;
}());
exports.HeroService = HeroService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVyby1zZXJ2aWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhlcm8tc2VydmljZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFDM0MsNkNBQWtEO0FBRWxELDRDQUFzRDtBQUN0RCx5Q0FBd0M7QUFNeEMsSUFBTSxHQUFHLEdBQUcscURBQXFELENBQUM7QUFDbEUsSUFBTSxRQUFRLEdBQUcsNkZBQTZGLENBQUMsQ0FBQyxlQUFlO0FBRy9IO0lBQ0kscUJBQW9CLElBQWdCO1FBQWhCLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRXpDLDhCQUFRLEdBQVIsVUFBUyxNQUFjLEVBQUUsSUFBYTtRQUF0QyxpQkFjQztRQWJHLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDUCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUksR0FBRyx3QkFBbUIsSUFBSSx5QkFBb0IsTUFBTSxTQUFJLFFBQVUsQ0FBQztpQkFDdEYsSUFBSSxDQUNMLGVBQUcsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksR0FBRyxLQUFJLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEVBQXhDLENBQXdDLENBQUMsQ0FDcEQsQ0FBQztRQUNWLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxHQUFHLHlCQUFvQixNQUFNLFNBQUksUUFBVSxDQUFDO2lCQUMvRCxJQUFJLENBQ0wsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxHQUFHLEtBQUksQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsRUFBeEMsQ0FBd0MsRUFDaEQsc0JBQVUsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQXRCLENBQXNCLENBQUMsQ0FDOUMsQ0FBQyxDQUFDO1FBQ1gsQ0FBQztJQUVMLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUFsQixpQkFLQztRQUpHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBSSxHQUFHLFNBQUksRUFBRSxTQUFJLFFBQVUsQ0FBQzthQUMzQyxJQUFJLENBQ0wsZUFBRyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxHQUFHLEtBQUksQ0FBQyw0QkFBNEIsQ0FBQyxJQUFJLENBQUMsRUFBOUMsQ0FBOEMsQ0FBQyxDQUMxRCxDQUFDO0lBQ1YsQ0FBQztJQUVELDRDQUFzQixHQUF0QixVQUF1QixJQUFJO1FBQ3ZCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUM7UUFDbkMsSUFBSSxjQUErQixDQUFDO1FBQ3BDLElBQUksSUFBVSxDQUFDO1FBQ2YsSUFBSSxLQUFLLEdBQVcsRUFBRSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQyxDQUFhLFVBQU8sRUFBUCxtQkFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztZQUFuQixJQUFJLElBQUksZ0JBQUE7WUFDVCxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksR0FBRztnQkFDZCxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNmLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztnQkFDN0IsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsbUJBQW1CLEVBQUU7YUFDdkcsQ0FBQyxDQUFBO1NBQ0w7UUFDRCxjQUFjLEdBQUc7WUFDYixLQUFLLEVBQUUsS0FBSztZQUNaLGNBQWMsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ3RELENBQUE7UUFDRCxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQzFCLENBQUM7SUFFRCxrREFBNEIsR0FBNUIsVUFBNkIsSUFBSTtRQUM3QixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQUksbUJBQXdDLENBQUM7UUFDN0MsSUFBSSxJQUFVLENBQUM7UUFDZixJQUFJLEdBQUc7WUFDSCxFQUFFLEVBQUUsT0FBTyxDQUFDLEVBQUU7WUFDZCxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUk7WUFDbEIsV0FBVyxFQUFFLE9BQU8sQ0FBQyxXQUFXO1lBQ2hDLEtBQUssRUFBRTtnQkFDSCxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsU0FBUyxFQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxvQkFBb0I7YUFDbkc7U0FDSixDQUFBO1FBQ0QsbUJBQW1CLEdBQUcsRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUM7UUFDckMsTUFBTSxDQUFDLG1CQUFtQixDQUFDO0lBRS9CLENBQUM7SUE3RFEsV0FBVztRQUR2QixpQkFBVSxFQUFFO3lDQUVpQixpQkFBVTtPQUQzQixXQUFXLENBK0R2QjtJQUFELGtCQUFDO0NBQUEsQUEvREQsSUErREM7QUEvRFksa0NBQVciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xyXG5pbXBvcnQgeyBjYXRjaEVycm9yLCBtYXAsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgb2YgfSBmcm9tIFwicnhqcy9vYnNlcnZhYmxlL29mXCI7XHJcblxyXG5pbXBvcnQgeyBIZXJvLCBIZXJvZXNWaWV3TW9kZWwsIEhlcm9EZXRhaWxWaWV3TW9kZWwgfSBmcm9tICcuLi9oZXJvLW1vZGVsL2hlcm8nXHJcblxyXG5cclxuXHJcbmNvbnN0IHVybCA9ICdodHRwczovL2dhdGV3YXkubWFydmVsLmNvbTo0NDMvdjEvcHVibGljL2NoYXJhY3RlcnMnO1xyXG5jb25zdCBzZWN1cml0eSA9ICd0cz0xNTE3MTA0MjUxJmFwaWtleT04YmEyNjlmNTNiNTc1YjdmNTA3MzMzMjZmOTZkOGZhMSZoYXNoPTc5NGQ2NjE3ZTBhODZkZjIyOTgwZGJhNmNhMzA0NDk1JzsgLy8gTk8gR09PRC4uLi4uXHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBIZXJvU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQpIHsgfVxyXG5cclxuICAgIGdldEhlcm9zKG9mZnNldDogbnVtYmVyLCBuYW1lPzogc3RyaW5nKTogT2JzZXJ2YWJsZTxIZXJvZXNWaWV3TW9kZWw+IHtcclxuICAgICAgICBpZiAobmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt1cmx9P25hbWVTdGFydHNXaXRoPSR7bmFtZX0mbGltaXQ9MjAmb2Zmc2V0PSR7b2Zmc2V0fSYke3NlY3VyaXR5fWApXHJcbiAgICAgICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcChkYXRhID0+IGRhdGEgPSB0aGlzLm1hcHBpbmdUb0hlcm9WaWV3TW9kZWwoZGF0YSkpXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3VybH0/bGltaXQ9MjAmb2Zmc2V0PSR7b2Zmc2V0fSYke3NlY3VyaXR5fWApXHJcbiAgICAgICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgIG1hcChkYXRhID0+IGRhdGEgPSB0aGlzLm1hcHBpbmdUb0hlcm9WaWV3TW9kZWwoZGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgY2F0Y2hFcnJvcihlcnJvciA9PiBvZihjb25zb2xlLmxvZygnYWNhJykpKVxyXG4gICAgICAgICAgICAgICAgKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRIZXJvKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPEhlcm9EZXRhaWxWaWV3TW9kZWw+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLmdldChgJHt1cmx9LyR7aWR9PyR7c2VjdXJpdHl9YClcclxuICAgICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIG1hcChkYXRhID0+IGRhdGEgPSB0aGlzLm1hcHBpbmdUb0hlcm9EZXRhaWxWaWV3TW9kZWwoZGF0YSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwcGluZ1RvSGVyb1ZpZXdNb2RlbChkYXRhKTogSGVyb2VzVmlld01vZGVsIHtcclxuICAgICAgICBsZXQgcmVzdWx0cyA9IGRhdGFbJ2RhdGEnXS5yZXN1bHRzO1xyXG4gICAgICAgIGxldCBoZXJvc1ZpZXdNb2RlbDogSGVyb2VzVmlld01vZGVsO1xyXG4gICAgICAgIGxldCBoZXJvOiBIZXJvO1xyXG4gICAgICAgIGxldCBoZXJvczogSGVyb1tdID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiByZXN1bHRzKSB7XHJcbiAgICAgICAgICAgIGhlcm9zLnB1c2goaGVybyA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBpdGVtLmlkLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogaXRlbS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGl0ZW0uZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogeyBwYXRoOiBpdGVtLnRodW1ibmFpbC5wYXRoLCBleHRlbnNpb246IGl0ZW0udGh1bWJuYWlsLmV4dGVuc2lvbiwgc2l6ZTogJy9wb3J0cmFpdF94bGFyZ2UuJyB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlcm9zVmlld01vZGVsID0ge1xyXG4gICAgICAgICAgICBoZXJvczogaGVyb3MsXHJcbiAgICAgICAgICAgIGNvbGxlY3Rpb25TaXplOiBNYXRoLnJvdW5kKGRhdGFbJ2RhdGEnXS50b3RhbCAvIDIwKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaGVyb3NWaWV3TW9kZWw7XHJcbiAgICB9XHJcblxyXG4gICAgbWFwcGluZ1RvSGVyb0RldGFpbFZpZXdNb2RlbChkYXRhKTogSGVyb0RldGFpbFZpZXdNb2RlbCB7XHJcbiAgICAgICAgbGV0IHJlc3VsdHMgPSBkYXRhWydkYXRhJ10ucmVzdWx0c1swXTtcclxuICAgICAgICBsZXQgaGVyb0RldGFpbFZpZXdNb2RlbDogSGVyb0RldGFpbFZpZXdNb2RlbDtcclxuICAgICAgICBsZXQgaGVybzogSGVybztcclxuICAgICAgICBoZXJvID0ge1xyXG4gICAgICAgICAgICBpZDogcmVzdWx0cy5pZCxcclxuICAgICAgICAgICAgbmFtZTogcmVzdWx0cy5uYW1lLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogcmVzdWx0cy5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgaW1hZ2U6IHtcclxuICAgICAgICAgICAgICAgIHBhdGg6IHJlc3VsdHMudGh1bWJuYWlsLnBhdGgsIGV4dGVuc2lvbjogcmVzdWx0cy50aHVtYm5haWwuZXh0ZW5zaW9uLCBzaXplOiAnL3BvcnRyYWl0X3VuY2FubnkuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlcm9EZXRhaWxWaWV3TW9kZWwgPSB7IGhlcm86IGhlcm8gfTtcclxuICAgICAgICByZXR1cm4gaGVyb0RldGFpbFZpZXdNb2RlbDtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==