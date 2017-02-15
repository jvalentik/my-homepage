
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Material Design';
  param = { value: 'world' };

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
