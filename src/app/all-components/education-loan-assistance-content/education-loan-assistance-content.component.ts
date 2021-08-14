import { Component, OnInit } from '@angular/core';
import { BankService } from 'src/app/all-services/bank.service';
import { LoaderService } from 'src/app/all-services/loader.service';

@Component({
  selector: 'app-education-loan-assistance-content',
  templateUrl: './education-loan-assistance-content.component.html',
  styleUrls: ['./education-loan-assistance-content.component.scss'],
})
export class EducationLoanAssistanceContentComponent implements OnInit {

  allBanks : any;
  bankdetails : string;
  constructor(private bakService : BankService,
              private loaderservice : LoaderService) { }

  pop:boolean = false;

  popOpen(bank : any){
    console.log(bank);
    this.bankdetails = bank;
    this.pop = true;
  }
  popClose(){
    this.pop = false;
  }

  ngOnInit() {

    this.loaderservice.presentLoading();
    this.bakService.getBanks().subscribe(res =>{
      console.log(res);
      this.loaderservice.hideLoading();
      this.allBanks = res;
    })
  }



}
