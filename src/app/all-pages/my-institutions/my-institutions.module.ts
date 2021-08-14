import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyInstitutionsPageRoutingModule } from './my-institutions-routing.module';

import { MyInstitutionsPage } from './my-institutions.page';
import { InstitutionContentComponent } from 'src/app/all-components/institution-content/institution-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyInstitutionsPageRoutingModule
  ],
  declarations: [MyInstitutionsPage, InstitutionContentComponent]
})
export class MyInstitutionsPageModule {}
