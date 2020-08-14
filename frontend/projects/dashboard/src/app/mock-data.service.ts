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
    const measurements: Measurement[] = [];

    for (let i = 1; i < 31; i++) {
      measurements.push({
        time: `2019-01-${i.toString().padStart(2, '0')} 09:00`,
        meterusage: Math.floor(Math.random() * 100) / 100 + 30,
      });
    }

    const meterusage: MeterUsage = {
      measurements: [...measurements],
    };

    return of(meterusage).pipe(delay(1000));
  }
}
