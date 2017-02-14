/**
 * Created by johny on 14/02/2017.
 */
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';
import { LANG_SK_NAME, LANG_SK_TRANS } from './lang-sk';
import { OpaqueToken } from '@angular/core';

export const TRANSLATIONS = new OpaqueToken('translations');
export const dictionary = {
  [LANG_EN_NAME]: LANG_EN_TRANS,
  [LANG_SK_NAME]: LANG_SK_TRANS,
};

export const TRANSLATION_PROVIDERS = [
  { provide: TRANSLATIONS, useValue: dictionary },
];

