import { TestBed } from '@angular/core/testing';

import { ConfirmedGuard } from './confirmed.guard';

describe('ConfirmedGuard', () => {
  let guard: ConfirmedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
