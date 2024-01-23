import { TestBed } from '@angular/core/testing';

import { CalculationserviceService } from './calculationservice.service';

describe('CalculationserviceService', () => {
  let service: CalculationserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculationserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
