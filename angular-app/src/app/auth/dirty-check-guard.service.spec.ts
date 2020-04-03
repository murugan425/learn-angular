import { TestBed } from '@angular/core/testing';

import { DirtyCheckGuardService } from './dirty-check-guard.service';

describe('DirtyCheckGuardService', () => {
  let service: DirtyCheckGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DirtyCheckGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
