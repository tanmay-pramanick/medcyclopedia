import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InstituteListPageRoutingModule } from './institute-list-routing.module';

import { InstituteListPage } from './institute-list.page';
import { InstituteListContentComponent } from 'src/app/all-components/institute-list-content/institute-list-content.component';
import { SummaryPipe } from '../../all-pipes/summary.pipe';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InstituteListPageRoutingModule
  ],
  declarations: [InstituteListPage, InstituteListContentComponent, SummaryPipe]
})
export class InstituteListPageModule {}
