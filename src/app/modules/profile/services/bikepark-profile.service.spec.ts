import { TestBed } from '@angular/core/testing';

import { BikeparkProfileService } from './bikepark-profile.service';

describe('BikeparkProfileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeparkProfileService = TestBed.get(BikeparkProfileService);
    expect(service).toBeTruthy();
  });
});
