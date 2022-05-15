import { TestBed } from '@angular/core/testing';

import { ExamDateService } from './exam-date.service';

describe('ExamDateService', () => {
  let service: ExamDateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamDateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
