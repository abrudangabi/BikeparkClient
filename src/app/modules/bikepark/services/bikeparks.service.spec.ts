import { TestBed } from '@angular/core/testing';

import { BikeparksService } from './bikeparks.service';

describe('BikeparksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeparksService = TestBed.get(BikeparksService);
    expect(service).toBeTruthy();
  });
});
