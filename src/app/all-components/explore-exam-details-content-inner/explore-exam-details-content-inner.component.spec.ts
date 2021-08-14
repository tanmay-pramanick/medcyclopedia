import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreExamDetailsContentInnerComponent } from './explore-exam-details-content-inner.component';

describe('ExploreExamDetailsContentInnerComponent', () => {
  let component: ExploreExamDetailsContentInnerComponent;
  let fixture: ComponentFixture<ExploreExamDetailsContentInnerComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreExamDetailsContentInnerComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreExamDetailsContentInnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
