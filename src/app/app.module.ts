import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticatedSidebarComponent } from './layout/authenticated-sidebar/authenticated-sidebar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AuthenticatedHeaderComponent } from './components/authenticated-header/authenticated-header.component';
import { LandingPageComponent } from './modules/shared/components/landing-page/landing-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticatedSidebarComponent,
    AuthenticatedHeaderComponent,
    LandingPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    ReactiveFormsModule,
    CommonModule,
    NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' }),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
