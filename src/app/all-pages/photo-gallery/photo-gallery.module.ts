import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhotoGalleryPageRoutingModule } from './photo-gallery-routing.module';

import { PhotoGalleryPage } from './photo-gallery.page';
import { GalleryContentComponent } from 'src/app/all-components/gallery-content/gallery-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhotoGalleryPageRoutingModule
  ],
  declarations: [PhotoGalleryPage, GalleryContentComponent]
})
export class PhotoGalleryPageModule {}
