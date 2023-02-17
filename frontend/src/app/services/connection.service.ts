import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { Device } from '../interfaces/device.interface';

@Injectable({
  providedIn: 'root',
})
export class ConnectionService {
  public devices: BehaviorSubject<Device[]> = new BehaviorSubject<Device[]>([]);

  private connectionString = 'http://localhost:5150/devices';

  constructor(private http: HttpClient) {}

  public getDevices() {
    this.http.get<Device[]>(this.connectionString).subscribe((result) => {
      this.devices.next(result);
    });
  }

  public addNewDevice(device: Device): Promise<void> {
    return lastValueFrom(this.http.post<void>(this.connectionString, device));
  }

  public deleteDevice(id: string): Promise<void> {
    return lastValueFrom(
      this.http.delete<void>(this.connectionString + '/' + id)
    );
  }
}
