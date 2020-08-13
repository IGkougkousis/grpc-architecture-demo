import { Observable } from 'rxjs';
import { MeterUsage } from './meterusage';

export interface IDataService {
  getMeterUsage(): Observable<MeterUsage>;
}
