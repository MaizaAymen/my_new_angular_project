import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SnapHomeComponent } from './snap-home/snap-home.component';
import { Aymen2Component } from './aymen2/aymen2.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideHttpClient,withFetch } from '@angular/common/http';
import { LandingPageComponentComponent } from './landing-page-component/landing-page-component.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnapHomeComponent,
    Aymen2Component,
    FaceSnapListComponent,
    LandingPageComponentComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    MatToolbarModule,
    HeaderComponent,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
