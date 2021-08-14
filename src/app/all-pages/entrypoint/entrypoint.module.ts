import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntrypointPageRoutingModule } from './entrypoint-routing.module';

import { EntrypointPage } from './entrypoint.page';
import { EntrypointContentComponent } from 'src/app/all-components/entrypoint-content/entrypoint-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntrypointPageRoutingModule
  ],
  declarations: [EntrypointPage, EntrypointContentComponent]
})
export class EntrypointPageModule {}
