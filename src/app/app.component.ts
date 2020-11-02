import {Component, Injectable, OnInit, Inject} from '@angular/core';
import Unsplash, { toJson } from 'unsplash-js';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  image: string;
}

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
  public unsplash = new Unsplash({ accessKey: 'kJR5wXodQmdEbVu9TmGa7elB0JmwH9-y4o6VOH4_uXA' });
  public a = this.onScrolled();

  ngOnInit(): void {
    this.onScrolled();
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
    this.dialog.open(DialogComponent, {
      data: {
        image: this.apiRes[i]
      }
    });
  }
}

@Component({
  selector: 'app-dialog',
  templateUrl: 'dialog.component.html',
})
export class DialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}
}
