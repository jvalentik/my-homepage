import { Inject, Injectable } from '@angular/core';
import { TRANSLATIONS } from './translation';

@Injectable()
export class TranslateService {
  private currentLang: string;

  public get currentLanguage() {
    return this.currentLang;
  }

  constructor(@Inject(TRANSLATIONS) private translations: any) { }

  public use(language: string): void {
    this.currentLang = language;
  }

  private translate(key: string): string {
    if (this.translations[this.currentLang] && this.translations[this.currentLang][key]) {
      return this.translations[this.currentLang][key];
    }
    return key;
  }

  public instant(key: string): any {
    return this.translate(key);
  }

}
