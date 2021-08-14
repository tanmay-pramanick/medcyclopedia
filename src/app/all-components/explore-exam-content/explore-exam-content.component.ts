import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoursedetailsService } from 'src/app/all-services/coursedetails.service';
import { CoursesService } from 'src/app/all-services/courses.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-explore-exam-content',
  templateUrl: './explore-exam-content.component.html',
  styleUrls: ['./explore-exam-content.component.scss'],
})
export class ExploreExamContentComponent implements OnInit {

  allCourses : any;
  constructor(private courseService : CoursesService,
              private coursedetailsservice : CoursedetailsService,
              private loaderservice : LoaderService,
              private router : Router) { }

  ngOnInit() {

    this.loaderservice.presentLoading();
    this.courseService.getCourses().subscribe(res =>{
      console.log(res);
      this.loaderservice.hideLoading();
      this.allCourses = res;
    })
  }

  getId(id : string){
    console.log(id);
    // this.coursedetailsservice.setCourseId(id);
    this.router.navigate(['/explore-exam-details'],{state :{id : id}});
    
  }

}
