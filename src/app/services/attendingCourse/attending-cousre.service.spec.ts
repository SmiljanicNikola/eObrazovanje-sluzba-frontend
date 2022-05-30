import { TestBed } from '@angular/core/testing';

import { AttendingCousreService } from './attending-cousre.service';

describe('AttendingCousreService', () => {
  let service: AttendingCousreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AttendingCousreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
