import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/all-services/loader.service';
import { PanelDiscussionService } from 'src/app/all-services/panel-discussion.service';

@Component({
  selector: 'app-panel-discussion-content',
  templateUrl: './panel-discussion-content.component.html',
  styleUrls: ['./panel-discussion-content.component.scss'],
})
export class PanelDiscussionContentComponent implements OnInit {

  past_panel : any = [];
  upcoming_panel : any = [];
  constructor(private panelService: PanelDiscussionService,
    private loader : LoaderService,
    ) { }

  ngOnInit() {
    this.loader.presentLoading();
    this.panelService.getPastPanelDiscussion().subscribe(data => {
      console.log(data);
      this.past_panel = data;
    })

    this.panelService.getUpcomingPanelDiscussion().subscribe(data =>{
      console.log(data);
      this.upcoming_panel = data;
    })
    this.loader.hideLoading();
  }

}
