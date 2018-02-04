import { TestBed, inject } from '@angular/core/testing';

import { ProblemDiagnosisService } from './problem-diagnosis.service';

describe('ProblemDiagnosisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProblemDiagnosisService]
    });
  });

  it('should be created', inject([ProblemDiagnosisService], (service: ProblemDiagnosisService) => {
    expect(service).toBeTruthy();
  }));
});
