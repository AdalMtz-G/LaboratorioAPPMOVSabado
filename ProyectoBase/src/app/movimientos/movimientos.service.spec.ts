import { TestBed } from '@angular/core/testing';

import { MovimientoService } from './movimientos.service';

describe('CuentaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovimientoService = TestBed.get(MovimientoService);
    expect(service).toBeTruthy();
  });
});