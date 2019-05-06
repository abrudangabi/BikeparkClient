import { TestBed } from '@angular/core/testing';

import { ConcursServiceService } from './concurs-service.service';

describe('ConcursServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcursServiceService = TestBed.get(ConcursServiceService);
    expect(service).toBeTruthy();
  });
});
