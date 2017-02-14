import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslatePipe } from './translate';
import { TranslateService } from './translate';
import { TRANSLATION_PROVIDERS } from './translate';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TranslatePipe
  ],
  providers: [
    TranslateService,
    TRANSLATION_PROVIDERS
  ],
  exports: [
    TranslatePipe
  ]
})
export class CoreModule {

  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
