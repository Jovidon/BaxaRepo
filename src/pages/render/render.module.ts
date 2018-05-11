import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RenderPage } from './render';

@NgModule({
  declarations: [
    RenderPage,
  ],
  imports: [
    IonicPageModule.forChild(RenderPage),
  ],
})
export class RenderPageModule {}
