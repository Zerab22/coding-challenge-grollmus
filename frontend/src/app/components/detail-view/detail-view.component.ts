import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Device } from 'src/app/interfaces/device.interface';
import { ConnectionService } from 'src/app/services/connection.service';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
})
export class DetailViewComponent implements OnInit {
  public device: Device | undefined;

  constructor(
    private activatedRoute: ActivatedRoute,
    private connection: ConnectionService
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.device = this.connection.devices.find(
        (device) => device.id === params['id']
      );
    });
  }

  ngOnInit(): void {}
}
