import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LazyloPage } from './lazylo';

@NgModule({
  declarations: [
    LazyloPage,
  ],
  imports: [
    IonicPageModule.forChild(LazyloPage),
  ],
})
export class LazyloPageModule {}
