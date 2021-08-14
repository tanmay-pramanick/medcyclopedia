import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PanelDiscussionPageRoutingModule } from './panel-discussion-routing.module';

import { PanelDiscussionPage } from './panel-discussion.page';
import { PanelDiscussionContentComponent } from 'src/app/all-components/panel-discussion-content/panel-discussion-content.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PanelDiscussionPageRoutingModule
  ],
  declarations: [PanelDiscussionPage, PanelDiscussionContentComponent]
})
export class PanelDiscussionPageModule {}
