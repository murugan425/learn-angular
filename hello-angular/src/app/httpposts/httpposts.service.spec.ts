import { TestBed, inject } from '@angular/core/testing';

import { HttppostsService } from './httpposts.service';

describe('HttppostsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttppostsService]
    });
  });

  it('should be created', inject([HttppostsService], (service: HttppostsService) => {
    expect(service).toBeTruthy();
  }));
});
