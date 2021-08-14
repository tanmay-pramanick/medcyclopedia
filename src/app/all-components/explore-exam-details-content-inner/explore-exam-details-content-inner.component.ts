import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ExamsService } from 'src/app/all-services/exams.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-explore-exam-details-content-inner',
  templateUrl: './explore-exam-details-content-inner.component.html',
  styleUrls: ['./explore-exam-details-content-inner.component.scss'],
})
export class ExploreExamDetailsContentInnerComponent implements OnInit {

  loc : any;
  exam_id : string;
  exam_detail : any = [];

  constructor(private location : Location,
              private examService : ExamsService,
              private loaderservice : LoaderService) { }

  ngOnInit() {

    this.loc = this.location.getState();
    this.loaderservice.presentLoading();
    this.exam_id = this.loc.exam_id;
    this.examService.viewExamsById(this.exam_id).subscribe(res => {
      console.log(res);
      this.loaderservice.hideLoading();
      this.exam_detail = res;

    })

  }

}
