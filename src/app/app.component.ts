import { Component, OnInit } from '@angular/core';
import { TranslateService } from './core/translate/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Angular Material Design';

  public translatedText: string;
  public supportedLanguages: any[];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    // standing data
    this.supportedLanguages = [
      { display: 'English', value: 'en' },
      { display: 'Slovak', value: 'sk' },
    ];

    // set current langage
    this.selectLang('es');
  }

  isCurrentLang(lang: string) {
    // check if the selected lang is current lang
    return lang === this.translate.currentLanguage;
  }

  selectLang(lang: string) {
    // set current lang;
    this.translate.use(lang);
    this.refreshText();
  }

  refreshText() {
    // refresh translation when language change
    this.translatedText = this.translate.instant('hello world');
  }
}
