import { TestBed } from '@angular/core/testing';

import { PreExamObligationService } from './pre-exam-obligation.service';

describe('PreExamObligationService', () => {
  let service: PreExamObligationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreExamObligationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
