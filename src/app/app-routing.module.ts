import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component'; 
const routes: Routes = [ { path: '', component: LandingPageComponentComponent }, 
  { path: 'facesnaps', component: FaceSnapListComponent } ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
