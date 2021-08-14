import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupSecondPagePageRoutingModule } from './signup-second-page-routing.module';

import { SignupSecondPagePage } from './signup-second-page.page';
import { SignupSecondPageContentComponent } from 'src/app/all-components/signup-second-page-content/signup-second-page-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupSecondPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SignupSecondPagePage, SignupSecondPageContentComponent]
})
export class SignupSecondPagePageModule {}
