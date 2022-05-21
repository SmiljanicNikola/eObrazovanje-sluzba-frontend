import { TestBed } from '@angular/core/testing';

import { LecturerOnTheSubjectService } from './lecturer-on-the-subject.service';

describe('LecturerOnTheSubjectService', () => {
  let service: LecturerOnTheSubjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LecturerOnTheSubjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
