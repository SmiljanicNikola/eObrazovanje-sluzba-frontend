import { TestBed } from '@angular/core/testing';

import { SubjectPerformanceService } from './subject-performance.service';

describe('SubjectPerformanceService', () => {
  let service: SubjectPerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubjectPerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
