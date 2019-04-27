import { TestBed } from '@angular/core/testing';

import { ConcursService } from './concurs.service';

describe('ConcursService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcursService = TestBed.get(ConcursService);
    expect(service).toBeTruthy();
  });
});
