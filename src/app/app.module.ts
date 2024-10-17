import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SnapHomeComponent } from './snap-home/snap-home.component';
import { Aymen2Component } from './aymen2/aymen2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SnapHomeComponent,
    Aymen2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
