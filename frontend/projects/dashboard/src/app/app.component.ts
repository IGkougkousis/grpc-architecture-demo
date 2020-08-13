import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { IDataService } from '../interfaces/data-service';
import { MeterUsage } from '../interfaces/meterusage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  constructor(@Inject('IDataService') private data: IDataService) {}

  public meterusage!: MeterUsage;

  ngOnInit() {
    this.meterusage = { measurements: [] };
    this.data.getMeterUsage().subscribe((mu) => {
      this.meterusage = mu;
    });
  }

  ngOnDestroy() {}
}
