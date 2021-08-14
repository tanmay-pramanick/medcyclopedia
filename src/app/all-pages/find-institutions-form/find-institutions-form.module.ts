import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindInstitutionsFormPageRoutingModule } from './find-institutions-form-routing.module';

import { FindInstitutionsFormPage } from './find-institutions-form.page';
import { InstitutionsFormContentComponent } from 'src/app/all-components/institutions-form-content/institutions-form-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindInstitutionsFormPageRoutingModule
  ],
  declarations: [FindInstitutionsFormPage, InstitutionsFormContentComponent]
})
export class FindInstitutionsFormPageModule {}
