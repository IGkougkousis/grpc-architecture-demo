import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/data-service';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MeterUsage } from '../interfaces/meterusage';
import { Measurement } from '../interfaces/measurement';

@Injectable({
  providedIn: 'root',
})
export class MockDataService implements IDataService {
  constructor() {}

  // provides mock data for local development purposes
  public getMeterUsage(): Observable<MeterUsage> {
    const m1: Measurement = {
      time: '2019-01-01 11:00',
      meterusage: 55.02,
    };

    const m2: Measurement = {
      time: '2019-01-02 11:00',
      meterusage: 34.78,
    };

    const m3: Measurement = {
      time: '2019-01-03 11:00',
      meterusage: 12.99,
    };

    const meterusage: MeterUsage = {
      measurements: [m1, m2, m3],
    };

    return of(meterusage).pipe(delay(1000));
  }
}
