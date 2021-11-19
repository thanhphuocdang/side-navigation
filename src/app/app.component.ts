import { Component } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'prime-demo';
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  showFiller = true;
  items: MenuItem[];
  home: MenuItem;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.items = [
      { label: 'Home' },
      { label: 'Maintenance job', url: 'http://localhost:4200/' },
      { label: 'Confirmation', url: 'http://localhost:4200/' },
    ];
    this.home = {icon: 'pi pi-home', routerLink: '/'};
  }
}
