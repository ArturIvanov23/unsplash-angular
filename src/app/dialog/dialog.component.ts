import {Component, Injectable, OnInit} from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';
import {AppComponent} from '../app.component';

@Injectable()

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {

  constructor(public appComponent: AppComponent) {}

  check(): void {
    console.log(this.appComponent.apiRes);
  }
}
