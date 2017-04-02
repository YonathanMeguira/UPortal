import { TestBed, inject } from '@angular/core/testing';

import { Mails } from './mails.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Mails]
    });
  });

  it('should ...', inject([Mails], (service: Mails) => {
    expect(service).toBeTruthy();
  }));
});
