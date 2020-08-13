import {
  Component,
  OnInit,
  Inject,
  ElementRef,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import { IDataService } from '../../interfaces/data-service';
import { MeterUsage } from '../../interfaces/meterusage';

@Component({
  selector: 'app-meterusage-display',
  templateUrl: './meterusage-display.component.html',
  styleUrls: ['./meterusage-display.component.scss'],
})
export class MeterusageDisplayComponent implements OnInit, AfterViewInit {
  constructor(@Inject('IDataService') private data: IDataService) {}

  public meterusage!: MeterUsage;

  public graph = {
    data: [{}],
    layout: { width: 840, height: 400, title: 'Meter Usage over Time' },
  };

  ngOnInit(): void {
    this.data.getMeterUsage().subscribe((mu) => {
      this.meterusage = mu;
      const dataset = {
        x: this.meterusage.measurements.map((mu) => mu.time),
        y: this.meterusage.measurements.map((mu) => mu.meterusage),
        type: 'scatter',
      };
      this.graph.data = [...this.graph.data, dataset];
    });
  }

  ngAfterViewInit() {}
}
