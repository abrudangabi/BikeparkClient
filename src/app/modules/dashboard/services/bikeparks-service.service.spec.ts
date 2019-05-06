import { TestBed } from '@angular/core/testing';

import { BikeparksServiceService } from './bikeparks-service.service';

describe('BikeparksServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeparksServiceService = TestBed.get(BikeparksServiceService);
    expect(service).toBeTruthy();
  });
});
