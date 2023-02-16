import { Component, Input } from '@angular/core';
import { Device } from 'src/app/interfaces/device.interface';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {
  @Input() device!: Device;

  constructor(private connection: ConnectionService) { }

  public delete() {
    this.connection.deleteDevice(this.device.id)
  }
}
