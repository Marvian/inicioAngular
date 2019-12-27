import { TestBed } from '@angular/core/testing';

import { ListaNegraService } from './lista-negra.service';

describe('ListaNegraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListaNegraService = TestBed.get(ListaNegraService);
    expect(service).toBeTruthy();
  });
});
