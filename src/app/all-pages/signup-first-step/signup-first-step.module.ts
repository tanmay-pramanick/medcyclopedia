import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignupFirstStepPageRoutingModule } from './signup-first-step-routing.module';

import { SignupFirstStepPage } from './signup-first-step.page';
import { SignupFirstStepContentComponent } from 'src/app/all-components/signup-first-step-content/signup-first-step-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignupFirstStepPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [SignupFirstStepPage, SignupFirstStepContentComponent]
})
export class SignupFirstStepPageModule {}
