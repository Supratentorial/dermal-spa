import { TestBed, inject } from '@angular/core/testing';

import { CalendarSettingsService } from './calendar-settings.service';

describe('CalendarSettingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalendarSettingsService]
    });
  });

  it('should be created', inject([CalendarSettingsService], (service: CalendarSettingsService) => {
    expect(service).toBeTruthy();
  }));
});
