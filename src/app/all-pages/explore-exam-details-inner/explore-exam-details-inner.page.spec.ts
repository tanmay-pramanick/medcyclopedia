import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ExploreExamDetailsInnerPage } from './explore-exam-details-inner.page';

describe('ExploreExamDetailsInnerPage', () => {
  let component: ExploreExamDetailsInnerPage;
  let fixture: ComponentFixture<ExploreExamDetailsInnerPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreExamDetailsInnerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ExploreExamDetailsInnerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
