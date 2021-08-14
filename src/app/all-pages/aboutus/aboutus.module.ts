import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AboutusPageRoutingModule } from './aboutus-routing.module';

import { AboutusPage } from './aboutus.page';
import { AboutusContentComponent } from 'src/app/all-components/aboutus-content/aboutus-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AboutusPageRoutingModule
  ],
  declarations: [AboutusPage, AboutusContentComponent]
})
export class AboutusPageModule {}
