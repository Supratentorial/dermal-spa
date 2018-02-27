import { TestBed, inject } from '@angular/core/testing';

import { PatientManagerService } from './patient-manager.service';

describe('PatientManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientManagerService]
    });
  });

  it('should be created', inject([PatientManagerService], (service: PatientManagerService) => {
    expect(service).toBeTruthy();
  }));
});
