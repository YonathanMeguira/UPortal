import { TestBed, inject } from '@angular/core/testing';

import { Users } from './users.service';

describe('LoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Users]
    });
  });

  it('should ...', inject([Users], (service: Users) => {
    expect(service).toBeTruthy();
  }));
});
