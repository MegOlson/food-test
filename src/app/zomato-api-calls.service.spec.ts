import { TestBed, inject } from '@angular/core/testing';

import { ZomatoApiCallsService } from './zomato-api-calls.service';

describe('ZomatoApiCallsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZomatoApiCallsService]
    });
  });

  it('should be created', inject([ZomatoApiCallsService], (service: ZomatoApiCallsService) => {
    expect(service).toBeTruthy();
  }));
});
