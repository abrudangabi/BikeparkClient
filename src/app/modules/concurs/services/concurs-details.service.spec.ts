import { TestBed } from '@angular/core/testing';

import { ConcursDetailsService } from './concurs-details.service';

describe('ConcursDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConcursDetailsService = TestBed.get(ConcursDetailsService);
    expect(service).toBeTruthy();
  });
});
