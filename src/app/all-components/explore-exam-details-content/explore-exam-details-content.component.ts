import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursedetailsService } from 'src/app/all-services/coursedetails.service';
import { ExamsService } from 'src/app/all-services/exams.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-explore-exam-details-content',
  templateUrl: './explore-exam-details-content.component.html',
  styleUrls: ['./explore-exam-details-content.component.scss'],
})
export class ExploreExamDetailsContentComponent implements OnInit {

  allExams : any = [];
  course_exam_id : string;
  exam_id : string;
  loc : any;


  constructor(private coursedetailsservice : CoursedetailsService,
              private location : Location,
              private examService : ExamsService,
              private loaderservice : LoaderService,
              private router : Router) { }

  ngOnInit() {

    this.loc = this.location.getState();
    this.loaderservice.presentLoading();
    this.course_exam_id = this.loc.id;
    // console.log(this.coursedetailsservice.getCourseId());
    this.examService.getExamsByCourseId(this.course_exam_id).subscribe(res =>{
      console.log(res);
      this.loaderservice.hideLoading();
      this.allExams = res;
    })
  }

  viewExam(id : string){

    this.router.navigate(['/explore-exam-details-inner'], {state : {exam_id : id}})
  }

}
