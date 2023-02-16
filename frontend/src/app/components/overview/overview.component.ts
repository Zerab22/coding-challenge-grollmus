import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/interfaces/device.interface';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  public devices: Device[] = []

  constructor(private connection: ConnectionService) {}

  ngOnInit(): void {
    this.connection.devices.subscribe((x) => {
      this.devices = x;
    })
  }
}
