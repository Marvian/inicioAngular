import { TestBed } from '@angular/core/testing';

import { NumeroCortoService } from './numero-corto.service';

describe('NumeroCortoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumeroCortoService = TestBed.get(NumeroCortoService);
    expect(service).toBeTruthy();
  });
});
