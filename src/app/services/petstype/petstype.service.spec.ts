import { TestBed } from '@angular/core/testing';

import { PettypeService } from './petstype.service';

describe('PettypeService', () => {
  let service: PettypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PettypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
