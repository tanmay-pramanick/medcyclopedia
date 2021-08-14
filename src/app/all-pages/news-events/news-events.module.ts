import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsEventsPageRoutingModule } from './news-events-routing.module';

import { NewsEventsPage } from './news-events.page';
import { NewsEventsContentComponent } from 'src/app/all-components/news-events-content/news-events-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsEventsPageRoutingModule
  ],
  declarations: [NewsEventsPage, NewsEventsContentComponent]
})
export class NewsEventsPageModule {}
