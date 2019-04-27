import { TestBed } from '@angular/core/testing';

import { TraseuService } from './traseu.service';

describe('TraseuService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TraseuService = TestBed.get(TraseuService);
    expect(service).toBeTruthy();
  });
});
