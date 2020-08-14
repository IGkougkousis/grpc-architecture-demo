import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ConfigurationService {
  constructor() {}

  public getWebApiHost(): string {
    return environment.webApiHost;
  }

  public getWebApiPort(): string {
    return environment.webApiPort;
  }
}
