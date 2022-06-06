import { TestBed } from '@angular/core/testing';

import { TypeOfRequirementService } from './type-of-requirement.service';

describe('TypeOfRequirementService', () => {
  let service: TypeOfRequirementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TypeOfRequirementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
