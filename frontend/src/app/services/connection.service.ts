import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Device } from '../interfaces/device.interface';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {
  private connectionString = 'http://localhost:5150/devices'

  constructor(private http: HttpClient) { }

  public getDevices(): Promise<Device> {
    return lastValueFrom(this.http.get<Device>(this.connectionString));
  }
}
