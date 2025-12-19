import { TestBed } from '@angular/core/testing';

import { EnvConfig } from './env-config';

describe('EnvConfig', () => {
  let service: EnvConfig;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EnvConfig);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
