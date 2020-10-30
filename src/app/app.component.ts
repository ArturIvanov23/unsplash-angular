import {Component, Injectable, OnInit} from '@angular/core';
import Unsplash, { toJson } from 'unsplash-js';
import {DialogComponent} from './dialog/dialog.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable()

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  public title = 'unsplash-angular';
  public searchVal = '';
  public apiRes: string[] = [];
  public dialogWindow = false;
  public expDialog: number = null;
  public unsplash = new Unsplash({ accessKey: 'RGOIhPIiVGlcm8pg_u1cUrmwwmzLB1mkr1tVq4GvJbE' });

  ngOnInit(): void {
    this.onScrolled();
    console.log(this.expDialog);
  }

  onScrolled(): void {
    if (this.searchVal !== '') {
      this.unsplash.photos.getRandomPhoto({ query: this.searchVal, count: 20})
        .then(toJson)
        .then(json => {
          return json.map(res => {
            const val = res.urls.small;
            this.apiRes.push(val);
          });
        });
          } else {
      this.unsplash.photos.getRandomPhoto({count: 20})
        .then(toJson)
        .then(json => {
          return json.map(res => {
            const val = res.urls.small;
            this.apiRes.push(val);
          });
        });
    }
  }

  SearchPhoto(): void {
    this.unsplash.search.photos(this.searchVal, { orientation: 'portrait'})
      .then(toJson)
      .then(json => {
        this.apiRes.length = 0;
        for (let i = 0; i < 20; i++) {
          this.apiRes.push(json.results[i].urls.small);
        }
      });
  }
  constructor(public dialog: MatDialog) {}

  openDialog(i): void {
    // console.log(i);
    this.expDialog = i;
    this.dialog.open(DialogComponent);
  }
}
