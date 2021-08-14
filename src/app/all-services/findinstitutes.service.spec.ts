import { TestBed } from '@angular/core/testing';

import { FindinstitutesService } from './findinstitutes.service';

describe('FindinstitutesService', () => {
  let service: FindinstitutesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FindinstitutesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
