import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CourseApplicationPage } from './course-application.page';

const routes: Routes = [
  {
    path: '',
    component: CourseApplicationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CourseApplicationPageRoutingModule {}
