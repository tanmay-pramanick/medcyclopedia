import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BeforeLoginAboutusContentComponent } from './before-login-aboutus-content.component';

describe('BeforeLoginAboutusContentComponent', () => {
  let component: BeforeLoginAboutusContentComponent;
  let fixture: ComponentFixture<BeforeLoginAboutusContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BeforeLoginAboutusContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BeforeLoginAboutusContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
