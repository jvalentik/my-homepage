import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ],
  exports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TranslateModule
  ]
})
export class SharedModule { }
