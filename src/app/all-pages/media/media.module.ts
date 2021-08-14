import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MediaPageRoutingModule } from './media-routing.module';

import { MediaPage } from './media.page';

import { MediaContentComponent } from 'src/app/all-components/media-content/media-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MediaPageRoutingModule
  ],
  declarations: [MediaPage, MediaContentComponent]
})
export class MediaPageModule {}
