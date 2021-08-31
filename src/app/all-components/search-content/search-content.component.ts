import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FindinstitutesService } from 'src/app/all-services/findinstitutes.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
})
export class SearchContentComponent implements OnInit {

  college : any;
  college_data : any = [];
  college_flag : boolean = false;
  constructor(private instituteService: FindinstitutesService,
    private loader : LoaderService,
    private router : Router) { }

  ngOnInit() {
    
  }

  search(){

    this.loader.presentLoading();
    this.instituteService.getAllInstitutes(this.college).subscribe(data =>{
      console.log(data);
      this.loader.hideLoading();
      this.college_data = data;

      if(this.college_data.length === 0){
        this.college_flag = true;
      }
      else{
        this.college_flag = false;
      }

      console.log(this.college_flag)
      
      
    })

  }

  goToCollege(institute_id){
   

    this.router.navigate(['/institute-list-details'], { state: {institute_id: institute_id } });
  }

}
