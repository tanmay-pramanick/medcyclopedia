import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EducationLoanAssistanceContentComponent } from './education-loan-assistance-content.component';

describe('EducationLoanAssistanceContentComponent', () => {
  let component: EducationLoanAssistanceContentComponent;
  let fixture: ComponentFixture<EducationLoanAssistanceContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationLoanAssistanceContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EducationLoanAssistanceContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
