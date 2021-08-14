import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewsEventsInnerPageRoutingModule } from './news-events-inner-routing.module';

import { NewsEventsInnerPage } from './news-events-inner.page';
import { NewsEventsInnerContentComponent } from 'src/app/all-components/news-events-inner-content/news-events-inner-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewsEventsInnerPageRoutingModule
  ],
  declarations: [NewsEventsInnerPage, NewsEventsInnerContentComponent]
})
export class NewsEventsInnerPageModule {}
