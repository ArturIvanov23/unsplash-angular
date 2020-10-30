import {Component, Injectable, Input} from '@angular/core';
import {AppComponent} from '../app.component';
// import {MatDialog} from '@angular/material/dialog';

@Injectable()

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent {
  checkVal = null;
  checkArr: string[] = [];

  // constructor(public appComponent: AppComponent) {
  // }
  //
  // check(): void {
  //   this.appComponent.expDialog = this.checkVal;
  //   this.appComponent.apiRes = this.checkArr;
  //   console.log(this.checkArr);
  //   console.log(this.checkVal);
  // }
}
