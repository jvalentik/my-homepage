import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NotfoundComponent } from './notfound.component';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NotfoundComponent
  ]
})
export class NotfoundModule { }
