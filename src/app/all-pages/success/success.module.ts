import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessPageRoutingModule } from './success-routing.module';

import { SuccessPage } from './success.page';
import { SignInContentComponent } from 'src/app/all-components/sign-in-content/sign-in-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [SuccessPage, SignInContentComponent]
})
export class SuccessPageModule {}
