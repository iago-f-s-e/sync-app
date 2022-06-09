import { AxiosInstance } from 'axios';
import * as Services from '@src/server/settings';
import { AuthService } from '@src/modules/auth/services';
import { httpClient } from '../config';
import { Injectable } from '@nestjs/common';
type Headers = {
  authorization: string;
};

type Config = {
  headers: Headers;
};

@Injectable()
export class HttpService {
  private readonly http: AxiosInstance;

  constructor(private readonly authService: AuthService) {
    this.http = httpClient;
  }

  private getToken(): string {
    const head = 'Bearer ';
    const tail = this.authService.generateToken({
      storeId: Services.STORE_ID,
      storeGroupId: Services.STORE_GROUP_ID
    });

    return `${head}${tail}`;
  }

  private getConfig(): Config {
    return { headers: { authorization: this.getToken() } };
  }

  public async post<Res, Req = unknown>(url: string, data: Req): Promise<Res> {
    return (await this.http.post<Res>(url, data, this.getConfig())).data;
  }

  public async put<Res, Req = unknown>(url: string, data: Req): Promise<Res> {
    return (await this.http.put<Res>(url, data, this.getConfig())).data;
  }
}
