import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeterusageDisplayComponent } from './meterusage-display/meterusage-display.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'meterusage', component: MeterusageDisplayComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
