import { TestBed } from '@angular/core/testing';

import { ApiCameraService } from './api-camera.service';

describe('ApiCameraService', () => {
  let service: ApiCameraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCameraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
