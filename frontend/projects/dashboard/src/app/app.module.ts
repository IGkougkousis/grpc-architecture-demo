import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MeterusageDisplayComponent } from './meterusage-display/meterusage-display.component';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [AppComponent, HomeComponent, MeterusageDisplayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
  ],
  providers: [
    {
      provide: 'IDataService',
      useClass: environment.dataService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
