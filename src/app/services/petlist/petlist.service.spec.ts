import { TestBed } from '@angular/core/testing';

import { PetlistService } from './petlist.service';

describe('PetlistService', () => {
  let service: PetlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
