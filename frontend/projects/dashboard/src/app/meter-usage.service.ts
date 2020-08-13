import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MeterUsage } from '../interfaces/meterusage';
import { IDataService } from '../interfaces/data-service';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MeterUsageService implements IDataService {
  constructor(private http: HttpClient) {}

  public getMeterUsage(): Observable<MeterUsage> {
    const host = environment['WEB_API_HOST'] || '0.0.0.0';
    const port = environment['WEB_API_PORT'] || 5000;
    const action = environment['WEB_API_METERUSAGE_ACTION'] || 'meterusage';
    const url = `http://${host}:${port}/${action}`;
    return this.http.get<MeterUsage>(url);
  }
}
