import { Injectable } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http';

@Injectable()
export class HeroService {
  constructor (private http: Http) {
    getNews(): $http.get("https://newsapi.org/v1/articles?source=techcrunch&apiKey=316be76529bd4ef8819ec09a6494e5c4").then(function (response) {
                console.log(response);
                return response.data;
            });
  }
}