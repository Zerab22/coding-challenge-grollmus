import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Device } from 'src/app/interfaces/device.interface';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit {

  @ViewChild('fileInput') fileInput: ElementRef | undefined;

  public devices: Device[] = [];

  constructor(private connection: ConnectionService) {}

  ngOnInit(): void {
    this.connection.getDevices();
    this.connection.devices.subscribe((devices) => {
      this.devices = devices;
    });
  }

  public openFileImport() {
    this.fileInput?.nativeElement.click();
  }

  public fileChanged(e: any) {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0]);
    fileReader.onload = () => {
      const arrayOfNewDevices = JSON.parse(fileReader.result as string).devices;
      this.uploadDevices(arrayOfNewDevices);
      this.fileInput!.nativeElement.value = '';
    }
  }

  private uploadDevices(devices: Device[]) {
    devices.forEach((device) => {
      this.connection.addNewDevice(device).catch((e) => {console.log(e)})
    })
  }
}
