import { TestBed } from '@angular/core/testing';

import { TinyMceService } from './tiny-mce.service';

describe('TinyMceService', () => {
  let service: TinyMceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TinyMceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
