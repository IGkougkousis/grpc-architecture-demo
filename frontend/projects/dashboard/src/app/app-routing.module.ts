import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeterusageDisplayComponent } from './meterusage-display/meterusage-display.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'meterusage', component: MeterusageDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
