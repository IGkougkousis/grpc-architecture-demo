import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { MeterUsage } from '../interfaces/meterusage';
import { IDataService } from '../interfaces/data-service';
import { Measurement } from '../interfaces/measurement';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root',
})
export class MeterUsageService implements IDataService {
  constructor(private http: HttpClient, private config: ConfigurationService) {}

  public getMeterUsage(): Observable<MeterUsage> {
    const host = this.config.getWebApiHost();
    const port = this.config.getWebApiPort();
    const action = 'meterusage';
    const url = `http://${host}:${port}/${action}`;
    return this.http
      .get<Measurement[]>(url)
      .pipe(map((ms) => ({ measurements: ms })));
  }
}
