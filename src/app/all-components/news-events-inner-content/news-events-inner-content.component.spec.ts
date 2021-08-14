import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NewsEventsInnerContentComponent } from './news-events-inner-content.component';

describe('NewsEventsInnerContentComponent', () => {
  let component: NewsEventsInnerContentComponent;
  let fixture: ComponentFixture<NewsEventsInnerContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsEventsInnerContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NewsEventsInnerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
