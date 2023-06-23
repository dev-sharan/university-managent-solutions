import { TestBed } from '@angular/core/testing';

import { UmsLibService } from './ums-lib.service';

describe('UmsLibService', () => {
  let service: UmsLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UmsLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
