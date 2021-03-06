import { Component } from '@angular/core';
import { NewsapiService } from './newsapi.service';
// MDB Angular Pro
// import { ButtonsModule, WavesModule, CollapseModule } from 'angular-bootstrap-md';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mArticles:Array<any>;
  mSources:Array<any>;
  constructor(private newsapi:NewsapiService){
    console.log('app component constructor called');
  }
// like:string='15';
  ngOnInit() {
        //load articles
      this.newsapi.initArticles().subscribe(data => this.mArticles = data['articles']);
    //load news sources
    this.newsapi.initSources().subscribe(data=> this.mSources = data['sources']);
    }

  searchArticles(source){
    console.log("selected source is: "+source);
    this.newsapi.getArticlesByID(source).subscribe(data => this.mArticles = data['articles']);
  }
}
