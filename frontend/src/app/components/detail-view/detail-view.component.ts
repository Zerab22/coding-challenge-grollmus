import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, take } from 'rxjs';
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
    private connection: ConnectionService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.connection.devices
      .pipe(filter((x) => x.length !== 0))
      .subscribe(() => {
        this.activatedRoute.params.pipe(take(1)).subscribe((params) => {
          this.device = this.connection.devices
            .getValue()
            .find((device) => device.id === params['id']);
        });
      });
  }

  public navigateToOverlay() {
    this.router.navigateByUrl('overview');
  }
}
