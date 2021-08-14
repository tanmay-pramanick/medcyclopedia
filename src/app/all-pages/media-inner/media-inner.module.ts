import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaInnerPageRoutingModule } from './media-inner-routing.module';

import { MediaInnerPage } from './media-inner.page';
import { MediaContentInnerComponent } from 'src/app/all-components/media-content-inner/media-content-inner.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaInnerPageRoutingModule
  ],
  declarations: [MediaInnerPage, MediaContentInnerComponent]
})
export class MediaInnerPageModule {}
