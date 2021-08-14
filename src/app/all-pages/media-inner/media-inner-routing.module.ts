import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediaInnerPage } from './media-inner.page';

const routes: Routes = [
  {
    path: '',
    component: MediaInnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MediaInnerPageRoutingModule {}
