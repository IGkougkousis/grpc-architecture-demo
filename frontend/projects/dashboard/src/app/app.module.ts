import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MeterusageDisplayComponent } from './meterusage-display/meterusage-display.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { AboutComponent } from './about/about.component';

import { MeterUsageService } from './meter-usage.service';
import { MockDataService } from './mock-data.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeterusageDisplayComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: 'IDataService',
      useClass: environment.production ? MeterUsageService : MockDataService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
