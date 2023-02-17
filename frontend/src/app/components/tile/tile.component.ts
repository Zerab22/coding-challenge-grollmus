import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/interfaces/device.interface';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent {

  @Input() device!: Device;

  public showDeleteDialog: boolean = false;

  constructor(private connection: ConnectionService, private router: Router) { }

  public openDeleteDialog() {
    this.showDeleteDialog = true;
  }

  public delete() {
    this.connection.deleteDevice(this.device.id).then(() => {
      this.showDeleteDialog = false;
      this.connection.getDevices();
    })
  }

  public navigateToDetails() {
    this.router.navigateByUrl('/detail/' + this.device.id);
  }
}
