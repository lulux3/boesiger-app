import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { AgmCoreModule } from 'angular2-google-maps/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routing';
import { CarouselComponent } from './carousel/carousel.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { GooglemapsComponent } from './googlemaps/googlemaps.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CarouselComponent,
    KontaktComponent,
    GooglemapsComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot(),
    routing,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAhy49AoTqIrFtm-I8GTg9OIUlZpnrXXgU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
