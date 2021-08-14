import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CourseApplicationPageRoutingModule } from './course-application-routing.module';

import { CourseApplicationPage } from './course-application.page';
import { CourseApplicationContentComponent } from 'src/app/all-components/course-application-content/course-application-content.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CourseApplicationPageRoutingModule
  ],
  declarations: [CourseApplicationPage, CourseApplicationContentComponent]
})
export class CourseApplicationPageModule {}
