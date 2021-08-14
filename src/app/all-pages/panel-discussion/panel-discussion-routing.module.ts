import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PanelDiscussionPage } from './panel-discussion.page';

const routes: Routes = [
  {
    path: '',
    component: PanelDiscussionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PanelDiscussionPageRoutingModule {}
