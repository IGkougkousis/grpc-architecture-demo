import { Component, OnInit, Inject } from '@angular/core';
import { IDataService } from '../../interfaces/data-service';
import { MeterUsage } from '../../interfaces/meterusage';

@Component({
  selector: 'app-meterusage-display',
  templateUrl: './meterusage-display.component.html',
  styleUrls: ['./meterusage-display.component.scss'],
})
export class MeterusageDisplayComponent implements OnInit {
  constructor(@Inject('IDataService') private data: IDataService) {}

  public meterusage!: MeterUsage;

  ngOnInit(): void {
    this.data.getMeterUsage().subscribe((mu) => {
      this.meterusage = mu;
    });
  }
}
