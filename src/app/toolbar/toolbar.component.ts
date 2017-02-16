import { Component, Input, OnInit } from '@angular/core';
import { MdSidenav } from '@angular/material';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input()
  public sideNav: MdSidenav;

  public message = 'Open menu';

  constructor() { }
  ngOnInit() {
  }

  public toggleMenu(): void {
    this.sideNav.toggle().then(result => {
      console.log('Menu toggled', result);
    });
  }

}
