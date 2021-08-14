import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursedetailsService {

  private courseId : string;
  constructor() { }

  public setCourseId(courseId : string) {
    this.courseId = courseId;
  }

  public getCourseId() : string {
    return this.courseId;
  }
}
