import { TestBed } from '@angular/core/testing';

import { ChartSeriesServiceService } from './chart-series-service.service';

describe('ChartSeriesServiceService', () => {
  let service: ChartSeriesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChartSeriesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
