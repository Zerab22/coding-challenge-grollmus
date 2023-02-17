import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
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
  public uploadOngoing: boolean = false;

  private devicesToUpload: number = 0;
  private finishedUploadRequests: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private errorsDuringUpload: number = 0;

  constructor(private connection: ConnectionService) {}

  ngOnInit(): void {
    this.addSubscriptions();
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
    };
  }

  private addSubscriptions() {
    this.connection.devices.subscribe((devices) => {
      this.devices = devices;
    });
    this.finishedUploadRequests
      .pipe(filter((x) => x === this.devicesToUpload && this.uploadOngoing))
      .subscribe(() => {
        this.uploadOngoing = false;
        this.connection.getDevices();
        if (this.errorsDuringUpload > 0) {
          this.errorsDuringUpload === 1
            ? window.alert('1 Gerät konnte nicht hinzugefügt werden')
            : window.alert(
                this.errorsDuringUpload +
                  ' Geräte konnten nicht hinzugefügt werden'
              );
        }
      });
  }

  private uploadDevices(devices: Device[]) {
    this.resetUploadCounters();
    this.devicesToUpload = devices.length;
    this.uploadOngoing = true;
    devices.forEach((device) => {
      this.connection
        .addNewDevice(device)
        .then(() => {
          this.finishedUploadRequests.next(
            this.finishedUploadRequests.getValue() + 1
          );
        })
        .catch(() => {
          this.errorsDuringUpload++;
          this.finishedUploadRequests.next(
            this.finishedUploadRequests.getValue() + 1
          );
        });
    });
  }

  private resetUploadCounters() {
    this.devicesToUpload = 0;
    this.finishedUploadRequests.next(0);
    this.errorsDuringUpload = 0;
  }
}
