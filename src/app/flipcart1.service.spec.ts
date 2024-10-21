import { TestBed } from '@angular/core/testing';

import { Flipcart1Service } from './flipcart1.service';

describe('Flipcart1Service', () => {
  let service: Flipcart1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Flipcart1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
