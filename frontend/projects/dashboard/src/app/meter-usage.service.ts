import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeterUsage } from '../interfaces/meterusage';
import { IDataService } from '../interfaces/data-service';
import { Measurement } from '../interfaces/measurement';

@Injectable({
  providedIn: 'root',
})
export class MeterUsageService implements IDataService {
  constructor(private http: HttpClient) {}

  public getMeterUsage(): Observable<MeterUsage> {
    const host = '0.0.0.0';
    const port = 5000;
    const action = 'meterusage';
    const url = `http://${host}:${port}/${action}`;
    return this.http
      .get<Measurement[]>(url)
      .pipe(map((ms) => ({ measurements: ms })));
  }
}
