import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeterUsage } from '../interfaces/meterusage';
import { IDataService } from '../interfaces/data-service';

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
    return this.http.get<MeterUsage>(url);
  }
}
