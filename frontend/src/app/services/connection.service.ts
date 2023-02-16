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

  constructor(private http: HttpClient) {
    // ! Dummy
    this.devices.next([
      {
        id: '1glmLrTZqf9YZleN',
        name: 'S7-150009',
        deviceTypeId: 'Beweis',
        failsafe: true,
        tempMin: 0,
        tempMax: 60,
        installationPosition: 'horizontal',
        insertInto19InchCabinet: true,
        motionEnable: true,
        siplusCatalog: true,
        simaticCatalog: true,
        rotationAxisNumber: 0,
        positionAxisNumber: 0,
      },
      {
        id: '2glmLrTZqf9YZleN',
        name: 'S7-1500',
        deviceTypeId: 'S7_1500',
        failsafe: true,
        tempMin: 0,
        tempMax: 50,
        installationPosition: 'horizontal',
        insertInto19InchCabinet: true,
        motionEnable: true,
        siplusCatalog: false,
        simaticCatalog: true,
        rotationAxisNumber: 0,
        positionAxisNumber: 0,
        advancedEnvironmentalConditions: false,
      },
      {
        id: '9RLMugEpCVSeemZ5',
        name: 'ET 200SP',
        deviceTypeId: 'ET200_SP',
        failsafe: false,
        tempMin: 0,
        tempMax: 40,
        installationPosition: 'horizontal',
        insertInto19InchCabinet: true,
        motionEnable: true,
        siplusCatalog: false,
        simaticCatalog: true,
        rotationAxisNumber: 0,
        positionAxisNumber: 0,
        terminalElement: true,
        advancedEnvironmentalConditions: false,
      },
      {
        id: '9RLMugEbCVSeemZ4',
        name: 'S7-300',
        deviceTypeId: 'S7_300',
        failsafe: true,
        tempMin: 0,
        tempMax: 40,
        installationPosition: 'vertical',
        insertInto19InchCabinet: false,
        motionEnable: false,
        siplusCatalog: false,
        simaticCatalog: false,
        rotationAxisNumber: 0,
        positionAxisNumber: 0,
        terminalElement: true,
        advancedEnvironmentalConditions: false,
      },
    ]);
    // ! Dummy end
  }

  public getDevices(): Promise<Device> {
    return lastValueFrom(this.http.get<Device>(this.connectionString));
  }

  public deleteDevice(id: string) {
    console.log('Device to delete: ' + id);
  }
}
