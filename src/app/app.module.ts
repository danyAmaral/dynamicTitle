import { NgModule } from '@angular/core';
import { BrowserModule, Title, Meta } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { TitleComponent } from './components/title/title.component';
import { CelularesComponent } from './components/celulares/celulares.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    TitleComponent,
    CelularesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [Title, Meta],
  bootstrap: [AppComponent],
})
export class AppModule {}
