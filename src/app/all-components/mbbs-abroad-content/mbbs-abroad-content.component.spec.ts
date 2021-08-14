import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MbbsAbroadContentComponent } from './mbbs-abroad-content.component';

describe('MbbsAbroadContentComponent', () => {
  let component: MbbsAbroadContentComponent;
  let fixture: ComponentFixture<MbbsAbroadContentComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ MbbsAbroadContentComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MbbsAbroadContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
