import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router'; 
import { FaceSnapListComponent } from './app/face-snap-list/face-snap-list.component'; 
import { LandingPageComponentComponent } from './app/landing-page-component/landing-page-component.component';
const routes: Routes = [
    { path: 'facesnaps', component: FaceSnapListComponent },
    { path: '', component: LandingPageComponentComponent  }
    
    ];
    
    @NgModule({
        imports: [
        RouterModule.forRoot(routes)
        ],
        exports: [
        RouterModule
        ]
        })
        
export class AppRoutingModule {
    
}