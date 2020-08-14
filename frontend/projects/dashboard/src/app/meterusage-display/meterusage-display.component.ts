import {
  Component,
  OnInit,
  Inject,
  AfterViewInit,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { IDataService } from '../../interfaces/data-service';
import { MeterUsage } from '../../interfaces/meterusage';
import { Chart, ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-meterusage-display',
  templateUrl: './meterusage-display.component.html',
  styleUrls: ['./meterusage-display.component.scss'],
})
export class MeterusageDisplayComponent implements OnInit, AfterViewInit {
  constructor(@Inject('IDataService') private data: IDataService) {}

  public readonly canvasId: string = 'chart-container';
  public loading: boolean = false;

  @ViewChild('canvas')
  private canvasRef!: ElementRef<HTMLCanvasElement>;

  private meterusage!: MeterUsage;
  private chart!: Chart;

  ngOnInit(): void {
    this.loading = true;
  }

  ngAfterViewInit(): void {
    this.data.getMeterUsage().subscribe((mu) => {
      this.meterusage = mu;
      this.loading = false;
      this.render();
    });
  }

  private render(): void {
    const canvas = this.canvasRef.nativeElement;
    this.chart = new Chart(canvas, {
      type: 'line',
      data: {
        labels: this.meterusage.measurements.map((mu) => mu.time),
        datasets: [
          {
            data: this.meterusage.measurements.map((mu) => mu.meterusage),
            label: 'Measurement',
            borderColor: '#3e95cd',
            fill: true,
            pointRadius: 4,
            pointStyle: 'rect',
          },
        ],
      },
      options: {
        scales: {
          xAxes: [
            {
              type: 'time',
              ticks: {
                autoSkip: true,
                maxTicksLimit: 30,
              },
            },
          ],
        },
        title: {
          display: true,
          text: 'Meter usage in January',
        },
      },
    });
    this.chart.render();
  }
}
