import { TestBed, inject } from '@angular/core/testing';

import { SanitizationService } from './sanitization.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SanitizationService]
    });
  });

  it('should ...', inject([SanitizationService], (service: SanitizationService) => {
    expect(service).toBeTruthy();
  }));
});
