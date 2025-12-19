import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ApiConfig } from './api-config';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EnvConfigService {
  public apiConfig?: ApiConfig;

  public get apiBaseUrl(){
    return this.apiConfig?.apiBaseUrl;
  }

  http = inject(HttpClient);
  
  public configPath = '/config.json';

  public init(){
    return this.http.get<ApiConfig>(this.configPath).pipe(tap(config => {
      this.apiConfig = config;
    }));
  }
}
